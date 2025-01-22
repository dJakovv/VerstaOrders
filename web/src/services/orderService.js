import { API_BASE_URL } from "../config.js";

export default class OrderService {
  constructor(baseUrl = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  async get(pageNumber = 1, pageSize = 5) {
    try {
      const url = new URL(`${this.baseUrl}/order`);
      url.searchParams.append("pageNumber", pageNumber);
      url.searchParams.append("pageSize", pageSize);
  
      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error("Ошибка при получении заказов");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Ошибка при получении заказов:", error);
      throw error;
    }
  }

  async create(orderData) {
    try {
      const response = await fetch(`${this.baseUrl}/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      if (!response.ok) {
        throw new Error("Ошибка при создании заказа", JSON.stringify(orderData));
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Ошибка при создании заказа:", error);
      throw error;
    }
  }
}
