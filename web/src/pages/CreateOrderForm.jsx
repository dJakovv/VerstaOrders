import useOrderForm from "../hooks/useOrderForm";
import InputField from "../components/InputField";

export default function CreateOrderForm() {
  const { orderForm, errors, handleChange, handleSubmit } = useOrderForm(
    {
      senderCity: "",
      senderAddress: "",
      receiverCity: "",
      receiverAddress: "",
      weightInKg: "",
      pickupDate: "",
    },
  );

  const fields = [
    {
      label: "Город отправителя",
      type: "text",
      name: "senderCity",
      required: true,
    },
    {
      label: "Адрес отправителя",
      type: "text",
      name: "senderAddress",
      required: true,
    },
    {
      label: "Город получателя",
      type: "text",
      name: "receiverCity",
      required: true,
    },
    {
      label: "Адрес получателя",
      type: "text",
      name: "receiverAddress",
      required: true,
    },
    {
      label: "Вес груза (кг)",
      type: "number",
      name: "weightInKg",
      required: true,
    },
    {
      label: "Дата забора груза",
      type: "date",
      name: "pickupDate",
      required: true,
    },
  ];

  return (
    <div className="mt-8 p-6 flex flex-col">
      <h3 className="text-3xl font-semibold mb-10 justify-center">Оформление заказа</h3>
      <form onSubmit={handleSubmit} className="w-full justify-center">
        {fields.map((field) => (
          <InputField
            key={field.name}
            label={field.label}
            type={field.type}
            name={field.name}
            value={orderForm[field.name]}
            onChange={handleChange}
            error={errors[field.name]}
            required={field.required}
            className="w-full"
          />
        ))}

        <button
          type="submit"
          className="px-4 py-2 bg-blue-700 text-white rounded-3xl hover:bg-blue-900 active:bg-blue-300"
        >
          Оформить заказ
        </button>
      </form>
    </div>
  );
}