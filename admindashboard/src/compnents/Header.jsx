import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const { logout } = useContext(AuthContext);
  return (
    <header className="w-full bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Admin</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="Avatar"
          className="w-8 h-8 rounded-full"
        />
        <button onClick={logout}>Log Out</button>
      </div>
    </header>
  );
}

export default Header;