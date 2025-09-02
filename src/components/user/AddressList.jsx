import React from "react";

const AddressList = ({ addresses }) => (
  <div className="space-y-4">
    {addresses.map((addr, i) => (
      <div
        key={i}
        className={`border rounded p-4 ${addr.is_default ? "border-blue-600" : ""}`}
      >
        <p>{addr.address_line1}</p>
        <p>{addr.address_line2}</p>
        <p>
          {addr.city}, {addr.state} - {addr.zip_code}
        </p>
        <p>{addr.country}</p>
        {addr.is_default && (
          <span className="text-blue-600 text-sm font-medium">Default Address</span>
        )}
      </div>
    ))}
  </div>
);

export default AddressList;
