import React from "react";

type Props = {
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  required?: boolean;
  [index: string]: any;
};

const Textfield = React.forwardRef(
  (props: Props, ref: React.LegacyRef<HTMLInputElement>) => {
    const { name, type, placeholder, required = false, ...rest } = props;

    return (
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        ref={ref}
        className="bg-whited border-2 rounded focus:border-2 focus:border-blue-400 p-2"
        {...rest}
      />
    );
  }
);

export default Textfield;
