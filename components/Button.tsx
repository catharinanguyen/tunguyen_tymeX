import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  className: string;
};

const Button = ({ type, title, className }: ButtonProps) => {
  return (
    <button type={type} className={className}>
      {title}
    </button>
  );
};

export default Button;
