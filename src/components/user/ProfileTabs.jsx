import React from "react";

const tabs = ["Profile", "Addresses", "Orders"];

const ProfileTabs = ({ activeTab, setActiveTab }) => (
  <div className="flex gap-4 border-b mb-6">
    {tabs.map((tab) => (
      <button
        key={tab}
        className={`py-2 px-4 font-medium ${
          activeTab === tab
            ? "border-b-2 border-blue-600 text-blue-600"
            : "text-gray-600"
        }`}
        onClick={() => setActiveTab(tab)}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default ProfileTabs;
