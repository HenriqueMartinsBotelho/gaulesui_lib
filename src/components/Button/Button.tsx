import React from "react";
import "./Button.css";

export interface IButtonProps {
  label: string;
}

const Button = (props: IButtonProps) => {
  return <button className="gau_button">{props.label}</button>;
};

export default Button;
