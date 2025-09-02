import React from "react";

const OrderList = ({ orders }) => (
  <div className="space-y-4">
    {orders.map((order) => (
      <div key={order.order_id} className="border rounded p-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">Order #{order.order_number}</h3>
          <span className="text-sm text-gray-600">{order.order_status}</span>
        </div>
        <p className="text-sm text-gray-600">
          Total: <strong>${order.total_amount.toFixed(2)}</strong> • Payment:{" "}
          {order.payment_status}
        </p>
      </div>
    ))}
  </div>
);

export default OrderList;
