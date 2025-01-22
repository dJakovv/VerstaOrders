import Tab from "./Tab";

export default function Tabs({ activeTab, onTabChange }) {
  return (
    <div className="mb-4">
      <ul
        className="flex flex-wrap -mb-px text-xl font-medium text-center"
        role="tablist"
      >
        <Tab
          label="Корзина"
          isActive={activeTab === "create_order"}
          onClick={() => onTabChange("create_order")}
        />
        <Tab
          label="История заказов"
          isActive={activeTab === "orders"}
          onClick={() => onTabChange("orders")}
        />
      </ul>
    </div>
  );
}
