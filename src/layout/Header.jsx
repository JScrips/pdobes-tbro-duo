import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const styles = {
    active: `text-red-500 border-b-2 border-red-500`,
    pending: `text-blue-500`,
  };

  return (
    <nav className=" flex justify-between p-8 items-center bg-sky-500">
      <div>Logo</div>
      <ul className="flex gap-6">
        <li>
          <NavLink
            to={"/"}
            end
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
          >
            Home Page
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/paris"}
            end
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
          >
            Paris Page
          </NavLink>
        </li>
      </ul>
      <div>User Information</div>
    </nav>
  );
};

export default Header;
