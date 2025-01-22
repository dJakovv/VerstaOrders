import { useState, useEffect } from "react";
import Pagination from "../components/pagination";
import OrderService from "../services/orderService";
import OrderDetailsModal from "../components/OrderDetaildModal";

export default function OrdersHistoryTab() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ordersPerPage = 5;

  const orderService = new OrderService();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await orderService.get(currentPage, ordersPerPage);

        const ordersArray = data.orders || [];
        const totalCount = data.totalCount || 0;

        setOrders(ordersArray);
        setTotalPages(Math.ceil(totalCount / ordersPerPage));
      } catch (error) {
        console.error("Ошибка при получении заказов:", error);
      }
    };

    fetchOrders();
  }, [currentPage]);

  const handleRowClick = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <div className="p-4 rounded-lg bg-gray-50 font-sans">
      <h2 className="text-2xl font-semibold mb-4">История заказов</h2>
      {orders.length === 0 ? (
        <p className="text-gray-500">У вас пока нет заказов.</p>
      ) : (
        <>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-2 font-medium">Номер заказа</th>
                <th className="p-2 font-medium">Город отправителя</th>
                <th className="p-2 font-medium">Адрес отправителя</th>
                <th className="p-2 font-medium">Город получателя</th>
                <th className="p-2 font-medium">Адрес получателя</th>
                <th className="p-2 font-medium">Вес (кг)</th>
                <th className="p-2 font-medium">Дата забора</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.orderNumber}
                  onClick={() => handleRowClick(order)}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  <td className="p-2 text-sm">{order.orderNumber}</td>
                  <td className="p-2 text-sm">{order.senderCity}</td>
                  <td className="p-2 text-sm">{order.senderAddress}</td>
                  <td className="p-2 text-sm">{order.receiverCity}</td>
                  <td className="p-2 text-sm">{order.receiverAddress}</td>
                  <td className="p-2 text-sm">{order.weightInKg}</td>
                  <td className="p-2 text-sm">{order.pickUpDate}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}

      {isModalOpen && (
        <OrderDetailsModal order={selectedOrder} onClose={closeModal} />
      )}
    </div>
  );
}