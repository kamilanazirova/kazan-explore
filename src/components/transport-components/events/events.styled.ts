import styled from "@emotion/styled";

export const TableEvents = styled.table`
width: 1200px;
border-top: 7px solid rgb(43, 129, 17);
border-collapse: collapse;
text-align: center;
margin-bottom: 20px;
border: 1px solid #D9D9D9;
border-radius: 10px;

`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid white; /* Цвет границ */
    color: black; /* Цвет текста */
`;

export const Th = styled.th`
    pudding: 30px;
    width: 200px;
    border: 1px solid white; /* Цвет границ */
    padding: 8px;
    text-align: left;
    background-color: white; /* Цвет фона */
    color: black; /* Цвет текста */
    text-align: center; /* Выравнивание заголовков по центру */
`;

export const Td = styled.td`
    font-size: 16px;
    text-align: left;
	padding: 15px;
	border: 1px solid #D9D9D9;
`;
