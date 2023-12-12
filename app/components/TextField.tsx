import React from "react";

const TextField = ({
  errorMessage,
  placeholder = "",
  ...rest
}: {
  errorMessage?: String | null;
  placeholder?: string;
}) => {
  return (
    <div>
      <input
        className={`text-field ${errorMessage ? "error" : ""}`}
        placeholder={placeholder}
        {...rest}
      ></input>
      <p className="text-field-error h4 txt-red mt-1">{errorMessage}</p>
    </div>
  );
};

export default TextField;
