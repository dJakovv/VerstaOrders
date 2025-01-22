export const validationRules = {
  senderAddress: [
    {
      validate: (value) => !!value,
      message: "Укажите адрес отправителя",
    },
  ],
  receiverAddress: [
    {
      validate: (value) => !!value,
      message: "Укажите адрес получателя",
    },
  ],
  senderCity: [
    {
      validate: (value) => !!value,
      message: "Город отправителя обязателен",
    },
  ],
  receiverCity: [
    {
      validate: (value) => !!value,
      message: "Город получателя обязателен",
    },
  ],
  weightInKg: [
    {
      validate: (value) => !!value,
      message: "Вес груза (кг) не указан",
    },
    {
      validate: (value) => !isNaN(parseFloat(value)) && isFinite(value),
      message: "Вес должен быть числом",
    },
  ],
  pickupDate: [
    {
      validate: (value) => !!value,
      message: "Дата забора груза не указана",
    },
    {
      validate: (value) => !isNaN(Date.parse(value)),
      message: "Некорректный формат даты",
    },
    {
      validate: (value) => new Date(value) > new Date(),
      message: "Дата должна быть после сегодняшнего дня",
    },
  ],
};