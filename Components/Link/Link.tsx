import React from "react";
import { Link } from "react-router-dom";
import { DashBoardIcon } from "./DashboardIcon";
import "./Link.style.scss";

type LinkProps = {
  linkTo: string;
  text: string;
};

export const MenuItem = (props: LinkProps) => {
  const { linkTo, text } = props;

  return (
    <Link to={`${linkTo}`} className="MenuItem">
      <DashBoardIcon type={text} /> {text}
    </Link>
  );
};
