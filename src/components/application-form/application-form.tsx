import React, { useState } from "react";
import { Container, Description, FormWrapper, Title, Input, Button, SuccessMessage, ErrorMessage } from "./application-form.styled";
const ApplicationForm = () => {
  const [formData, setFormData] = useState({ Name: "", Phone: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Ограничиваем поле "Phone" только цифрами и длиной 11 символов
    if (name === "Phone" && !/^\d*$/.test(value)) {
      return; // Разрешаем только цифры
    }
    setFormData({ ...formData, [name]: value });
    // Очищаем ошибку, если пользователь изменил номер
    if (name === "Phone" && value.length === 11) {
      setPhoneError("");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Проверка длины номера телефона (должно быть ровно 11 цифр)
    if (formData.Phone.length !== 11) {
      setPhoneError("Номер телефона должен состоять из 11 цифр.");
      return;
    }
    // Очищаем форму сразу после отправки
    setFormData({ Name: "", Phone: "" });
    try {
      await fetch('https://script.google.com/macros/s/AKfycbwRFUNI7V6zadM44T3lLnj29Ea14q_sPc1BZND0hqaPvJTNGev9HXf5dQs3iZ_0Zuwm/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'no-cors',
      });
      // Показываем сообщение об успехе
      setSuccessMessage("Данные отправлены. Скоро с Вами свяжутся!");
      
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };
  return (
    <Container>
      <Description>
        Хотите получше познакомиться с Казанью? Запишитесь на экскурсию и узнайте все самые интересные факты о городе! Отправьте заявку, и мы свяжемся с Вами!
      </Description>
      <FormWrapper onSubmit={handleSubmit}>
        <Title>Отправить заявку</Title>
        <Input
          type="text"
          name="Name"
          placeholder="Имя"
          value={formData.Name}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="Phone"
          placeholder="Номер телефона"
          value={formData.Phone}
          onChange={handleChange}
          required
          maxLength={11} // Ограничение длины до 11 символов
        />
        {phoneError && <ErrorMessage>{phoneError}</ErrorMessage>}
        <Button type="submit">Отправить</Button>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      </FormWrapper>
    </Container>
  );
};
export default ApplicationForm;