import React, { useState } from "react";
import Tabs from "./components/Tabs";
import OrdersHistoryTab from "./pages/OrderHistoryTab";
import CreateOrderForm from "./pages/CreateOrderForm";

export default function App() {
  const [activeTab, setActiveTab] = useState("create_order");

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-2/5 min-w-96 h-[800px] bg-white p-6 rounded-lg shadow-lg flex flex-col justify-start items-center">
        <Tabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          className="justify-self-start"
        />

        <div
          id="default-tab-content"
          className="w-full flex flex-col justify-center items-center"
        >
          {activeTab === "create_order" && <CreateOrderForm />}
          {activeTab === "orders" && <OrdersHistoryTab />}
        </div>
      </div>
    </main>
  );
}
