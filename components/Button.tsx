import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  className: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  value?: string | number;
};

const Button = ({ type, title, className, onClick, value }: ButtonProps) => {
  return (
    <button type={type} className={className} onClick={onClick} value={value}>
      {title}
    </button>
  );
};

export default Button;
