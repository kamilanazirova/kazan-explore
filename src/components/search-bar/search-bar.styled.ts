import styled from "@emotion/styled";

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  font-size: 16px;
  margin-bottom: 20px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;
