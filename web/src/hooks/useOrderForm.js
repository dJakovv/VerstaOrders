import { useState } from "react";
import validateField from "../utils/validation/validateFields";
import OrderService from "../services/orderService";

export default function useOrderForm(initialState, onSubmit) {
  const [orderForm, setOrderForm] = useState(initialState);
  const [errors, setErrors] = useState({
    senderAddress: "",
    receiverAddress: "",
    senderCity: "",
    receiverCity: "",
    weightInKg: "",
    pickupDate: "",
  });

  const orderService = new OrderService();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderForm({ ...orderForm, [name]: value });

    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    let isFormValid = true;

    Object.keys(orderForm).forEach((fieldName) => {
      const error = validateField(fieldName, orderForm[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
        isFormValid = false;
      } else {
        newErrors[fieldName] = "";
      }
    });

    setErrors(newErrors);

    if (!isFormValid) {
      return;
    }

    try {
      const orderData = {
        senderCity: orderForm.senderCity,
        senderAddress: orderForm.senderAddress,
        receiverCity: orderForm.receiverCity,
        receiverAddress: orderForm.receiverAddress,
        weightInKg: orderForm.weightInKg,
        pickUpDate: orderForm.pickupDate,
      };

      const createdOrder = await orderService.create(orderData);
      alert(`Заказ успешно создан: №${createdOrder.orderNumber}`);

      if (onSubmit) {
        onSubmit(e);
      }

    } catch (error) {
      console.error('Ошибка при создании заказа:', error);
    }
  };

  return { orderForm, errors, handleChange, handleSubmit };
}