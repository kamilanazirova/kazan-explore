import argparse
import sys

from sly import Parser, Lexer


class CommandLexer(Lexer):
    tokens = {
        RECALL, FOR, WHILE, NOOPTIMIZE,
        ALL, NEXT, RECORD, REST,
        IDENTIFIER, NUMBER, STRING, LOGICAL_OPERATOR, ARITHMETIC_OPERATOR, LPAREN, RPAREN, SEMICOLON, ERROR
    }

    ignore = ' \t\n'

    RECALL = r'RECALL'
    FOR = r'FOR'
    WHILE = r'WHILE'
    NOOPTIMIZE = r'NOOPTIMIZE'

    ALL = r'ALL'
    NEXT = r'NEXT'
    RECORD = r'RECORD'
    REST = r'REST'

    LPAREN = r'\('
    RPAREN = r'\)'

    LOGICAL_OPERATOR = r'(==|<=|>=|!=|<|>|AND|\|\|OR)'
    ARITHMETIC_OPERATOR = r'(\+|-|\*|/)'

    IDENTIFIER = r'[a-zA-Z_][a-zA-Z0-9_.]*'
    NUMBER = r'\d+'
    STRING = r'"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\''

    SEMICOLON = r';'

    ignore_comment = r'\*\*.*'

    def error(self, t):
        print(f'Bad character: {t.value[0]}  Position {self.index} Context: {t.value[1:]}', end='')
        self.index += 1


class FoxProParser(Parser):
    tokens = CommandLexer.tokens
    syntax_error = ''

    debugfile = 'output.log'

    @_('optional_error_token RECALL optional_scope optional_for_clause optional_while_clause optional_nooptimize_clause SEMICOLON')
    def command(self, p):
        if p.optional_error_token:
            return p.optional_error_token
        return {
            'type': 'RECALL',
            'scope': p.optional_scope,
            'for': p.optional_for_clause,
            'while': p.optional_while_clause,
            'nooptimize': p.optional_nooptimize_clause
        }

    @_('')
    def optional_error_token(self, p):
        return None

    @_('ERROR')
    def optional_error_token(self, p):
        self.error(p.ERROR)

    @_('ERROR')
    def command(self, p):
        return p.ERROR

    @_('ALL')
    def scope(self, p):
        return 'ALL'

    @_('NEXT NUMBER')
    def scope(self, p):
        return ('NEXT', p.NUMBER)

    @_('RECORD NUMBER')
    def scope(self, p):
        return ('RECORD', p.NUMBER)

    @_('REST')
    def scope(self, p):
        return 'REST'

    @_('')
    def optional_scope(self, p):
        return None

    @_('scope')
    def optional_scope(self, p):
        return p.scope

    @_('FOR expression')
    def for_clause(self, p):
        return p.expression

    @_('')
    def optional_for_clause(self, p):
        return None

    @_('for_clause')
    def optional_for_clause(self, p):
        return p.for_clause

    @_('WHILE expression')
    def while_clause(self, p):
        return p.expression

    @_('')
    def optional_while_clause(self, p):
        return None

    @_('while_clause')
    def optional_while_clause(self, p):
        return p.while_clause

    @_('NOOPTIMIZE')
    def nooptimize_clause(self, p):
        return True

    @_('')
    def optional_nooptimize_clause(self, p):
        return None

    @_('nooptimize_clause')
    def optional_nooptimize_clause(self, p):
        return p.nooptimize_clause

    # Правила для выражений
    @_('NUMBER')
    def expression(self, p):
        return ('NUMBER', int(p.NUMBER))

    @_('STRING')
    def expression(self, p):
        return p.STRING[1:-1]

    @_('IDENTIFIER')
    def expression(self, p):
        return ('ID', p.IDENTIFIER)

    @_('expression LOGICAL_OPERATOR expression')
    def expression(self, p):
        return (p.expression0, p.LOGICAL_OPERATOR, p.expression1)

    @_('LPAREN expression RPAREN')
    def expression(self, p):
        return p.expression

    # Стандартная обёртка для обработки числовых выражений
    @_('expression ARITHMETIC_OPERATOR expression')
    def expression(self, p):
        if p.ARITHMETIC_OPERATOR == '+':
            return ('NUMBER', p.expression0[1] + p.expression1[1])
        elif p.ARITHMETIC_OPERATOR == '-':
            return ('NUMBER', p.expression0[1] - p.expression1[1])
        elif p.ARITHMETIC_OPERATOR == '*':
            return ('NUMBER', p.expression0[1] * p.expression1[1])
        elif p.ARITHMETIC_OPERATOR == '/':
            try:
                res = p.expression0[1] / p.expression1[1]
                return ('NUMBER', res)
            except ZeroDivisionError:
                return ('NUMBER', 0)

    def error(self, p):
        if p:
            self.syntax_error = f"Синтаксическая ошибка: некорректный символ {p.value} на строке {self.line_number}"
            print(self.syntax_error)
        else:
            self.syntax_error = f"Синтаксическая ошибка: неожиданный конец файла"
            print(self.syntax_error)
        self.restart()


def parse_arguments():
    parser = argparse.ArgumentParser(prog='parser')
    parser.add_argument("filename_input", help="filename", type=argparse.FileType('r', encoding='UTF-8'))
    parser.add_argument("filename_output", help="filename", type=str)
    args = parser.parse_args()
    return args


def run_parser():
    args = parse_arguments()
    lexer = CommandLexer()
    parser = FoxProParser()

    number_line = 1
    with args.filename_input as infile, open(args.filename_output, 'w', encoding='UTF-8') as outfile:
        sys.stdout = outfile
        for line in infile:
            try:
                lexer_tokenize = lexer.tokenize(line)
                result = parser.parse(lexer_tokenize)
                outfile.write(str(result) + "\n")
            except Exception as e:
                print('on line', number_line)
            number_line += 1


if __name__ == '__main__':
    run_parser()
    sys.stdout = sys.__stdout__
