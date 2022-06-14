import React from "react";

interface IButtonProps {
  label: string;
}

const Button = (props: IButtonProps) => {
  return <button>{props.label}</button>;
};

export default Button;
