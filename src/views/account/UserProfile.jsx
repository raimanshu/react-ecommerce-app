// pages/UserProfile.jsx
import React, { useState } from "react";
import ProfileTabs from "../../components/user/ProfileTabs";
import ProfileInfo from "../../components/user/ProfileInfo";
import AddressList from "../../components/user/AddressList";
import OrderList from "../../components/user/OrderList";

const mockUser = {
    name: "Jane Doe",
    username: "janedoe",
    email: "jane@example.com",
    contact_number: "+1-555-987-6543",
    is_verified: true,
};

const mockAddresses = [
    {
        address_line1: "123 Main Street",
        address_line2: "Apt 101",
        city: "San Francisco",
        state: "CA",
        zip_code: "94103",
        country: "USA",
        is_default: true,
    },
    {
        address_line1: "789 Second Ave",
        address_line2: "",
        city: "New York",
        state: "NY",
        zip_code: "10001",
        country: "USA",
        is_default: false,
    },
];

const mockOrders = [
    {
        order_id: 1,
        order_number: "ORD123456",
        total_amount: 249.99,
        order_status: "Shipped",
        payment_status: "Paid",
    },
    {
        order_id: 2,
        order_number: "ORD789012",
        total_amount: 89.5,
        order_status: "Delivered",
        payment_status: "Paid",
    },
];

const UserProfile = () => {
    const [activeTab, setActiveTab] = useState("Profile");

    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-semibold mb-6">My Account</h1>
            <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="bg-white shadow-md rounded p-6">
                {activeTab === "Profile" && <ProfileInfo user={mockUser} />}
                {activeTab === "Addresses" && <AddressList addresses={mockAddresses} />}
                {activeTab === "Orders" && <OrderList orders={mockOrders} />}
            </div>
        </div>
    );
};

export default UserProfile;
