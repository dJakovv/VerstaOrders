export default function OrderDetailsModal({ order, onClose }) {
  if (!order) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h3 className="text-xl font-semibold mb-4">
          Детали заказа #{order.orderNumber}
        </h3>
        <div className="space-y-2">
          <p>
            <strong>Город отправителя:</strong> {order.senderCity}
          </p>
          <p>
            <strong>Адрес отправителя:</strong> {order.senderAddress}
          </p>
          <p>
            <strong>Город получателя:</strong> {order.receiverCity}
          </p>
          <p>
            <strong>Адрес получателя:</strong> {order.receiverAddress}
          </p>
          <p>
            <strong>Вес (кг):</strong> {order.weightInKg}
          </p>
          <p>
            <strong>Дата забора:</strong> {order.pickUpDate}
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}