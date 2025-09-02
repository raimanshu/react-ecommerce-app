import React, { useState } from 'react';

const CheckoutForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-sm space-y-4">
      <h2 className="text-xl font-semibold">Shipping & Payment</h2>

      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Full Name"
        required
        className="w-full p-2 border rounded"
      />
      <input
        name="address"
        value={form.address}
        onChange={handleChange}
        placeholder="Address"
        required
        className="w-full p-2 border rounded"
      />
      <div className="flex gap-4">
        <input
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="City"
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="zip"
          value={form.zip}
          onChange={handleChange}
          placeholder="ZIP Code"
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <h3 className="font-medium mt-4">Payment Info</h3>
      <input
        name="cardNumber"
        value={form.cardNumber}
        onChange={handleChange}
        placeholder="Card Number"
        required
        className="w-full p-2 border rounded"
      />
      <div className="flex gap-4">
        <input
          name="expiry"
          value={form.expiry}
          onChange={handleChange}
          placeholder="MM/YY"
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="cvv"
          value={form.cvv}
          onChange={handleChange}
          placeholder="CVV"
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Place Order
      </button>
    </form>
  );
};

export default CheckoutForm;
