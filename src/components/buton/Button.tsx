import React from "react";

type Props = {
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
};

const Button: React.FC<Props> = ({ onClick, type = "button", children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 px-4 py-2 text-sm text-white rounded"
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
