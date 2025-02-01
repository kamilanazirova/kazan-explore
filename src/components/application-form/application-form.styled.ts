import styled from "@emotion/styled";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%; /* Растягиваем контейнер по ширине */
`;
export const Description = styled.p`
  margin-top: 0;
  font-size: 20px;
  color: white; /* Белый цвет текста */
  text-align: center;
  width: 100%; /* Текст на всю ширину */
  padding: 15px 20px; /* Добавила отступы, чтобы текст не прилипал к краям */
  box-sizing: border-box; /* Чтобы padding не увеличивал ширину */
`;
export const FormWrapper = styled.form`
  background: #d9d9d9;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Title = styled.h2`
  margin: 8px;
  color: #333;
`;
export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #bbb;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
`;
export const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  background: #2e7d32; /* Темно-зеленый цвет */
  color: white;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #1b5e20; /* Более темный оттенок при наведении */
  }
`;
export const SuccessMessage = styled.p`
  color: green;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
`;
export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  text-align: center;
  margin-top: 5px;
`;