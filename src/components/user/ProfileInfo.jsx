import React from "react";

const ProfileInfo = ({ user }) => (
  <div className="space-y-4">
    <p><strong>Name:</strong> {user.name}</p>
    <p><strong>Username:</strong> {user.username}</p>
    <p><strong>Email:</strong> {user.email}</p>
    <p><strong>Contact:</strong> {user.contact_number}</p>
    <p>
      <strong>Status:</strong>{" "}
      <span className={user.is_verified ? "text-green-600" : "text-red-600"}>
        {user.is_verified ? "Verified" : "Not Verified"}
      </span>
    </p>
  </div>
);

export default ProfileInfo;
