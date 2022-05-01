import React from "react";
import { Caret } from "../../assets/Icons/Caret";
import { useToken } from "../App/useToken";
import "./Avatar.style.scss";
import { AvatarIcon } from "./Icon";

export const Avatar = () => {
  const isLoggedIn = useToken().getToken();

  return (
    <div className="Avatar">
      <AvatarIcon className={isLoggedIn ? "online" : "offline"} />
      <Caret className="neutral" />
    </div>
  );
};
