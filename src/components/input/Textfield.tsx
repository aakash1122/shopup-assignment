import React from "react";

type Props = {
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
};

const Textfield = React.forwardRef(
  (props: Props, ref: React.LegacyRef<HTMLInputElement>) => {
    const { name, type, placeholder, required = false } = props;

    return (
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        ref={ref}
        className="bg-whited border-2 rounded focus:border-2 focus:border-blue-400 p-2"
      />
    );
  }
);

export default Textfield;
