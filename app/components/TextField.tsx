import React from "react";

const TextField = ({
  errorMessage,
  ...rest
}: {
  errorMessage?: String | null;
}) => {
  return (
    <div>
      <input
        className={`text-field ${errorMessage ? "error" : ""}`}
        {...rest}
      ></input>
      <p className="text-field-error h4 txt-red mt-1">{errorMessage}</p>
    </div>
  );
};

export default TextField;
