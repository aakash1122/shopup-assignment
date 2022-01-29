import React from "react";

type Props = {
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  [index: string]: any;
};

const Button: React.FC<Props> = ({
  onClick,
  type = "button",
  children,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 px-4 py-2 text-sm text-white rounded"
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
