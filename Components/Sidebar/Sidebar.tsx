import React from "react";
import { Menu } from "../Menu/Menu";
import "./Sidebar.style.scss";

export const Sidebar = () => {
  return (
    <div className="Sidebar">
      <h2>.Control panel</h2>

      <Menu />
    </div>
  );
};
