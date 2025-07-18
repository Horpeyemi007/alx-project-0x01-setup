import { UserProps } from "@/interfaces";
import React from "react";

const UserCard: React.FC<UserProps> = ({ username, email, company, id }) => {
  return (
    <div className="max-w-xl max-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{username}</h2>
      </div>
      <p className="text-gray-600">{email}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>User ID: {id}</span>
        <span>Company: {company.name}</span>
      </div>
    </div>
  );
};

export default UserCard;
