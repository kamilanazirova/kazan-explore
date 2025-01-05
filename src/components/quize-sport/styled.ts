import { CSSProperties } from "react";

export const introContainer: CSSProperties = {
  textAlign: "center",
};

export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "65%", // Увеличиваем ширину
  height: "75%", // Добавляем высоту
  bgcolor: "#e7ebe4",
  color: "black",
  boxShadow: 24,
  p: 4,
  borderRadius: "12px", // Закругленные углы
  overflowY: "auto", // Скролл для контента, если он превышает высоту окна
};

export const resultImageStyle: CSSProperties = {
  width: "75%",
  borderRadius: "30px",
  margin: "10px auto",
};

export const buttonStyles = {
  backgroundColor: "#006400", // Темно-зеленый цвет
  "&:hover": {
    backgroundColor: "#004d00", // Темнее при наведении
  },
};

export const finishButtonStyle = {
  mt: "2",
  backgroundColor: "#006400",
  "&:hover": {
    backgroundColor: "#004d00",
  },
  padding: "10px 20px",
  display: "block",
  margin: "10px auto",
};

export const resultText = {
  fontSize: "18px",
}
