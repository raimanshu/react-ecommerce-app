import React from 'react';

const OrderSummary = ({ items }) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white p-6 rounded shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between text-sm text-gray-700">
            <span>
              {item.title} x {item.quantity}
            </span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <hr className="my-4" />
      <div className="flex justify-between font-medium text-gray-800">
        <span>Total</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
