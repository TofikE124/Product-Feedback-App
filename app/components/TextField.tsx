import React, { LegacyRef, forwardRef } from "react";

const TextField = forwardRef(
  (
    {
      errorMessage,
      defaultValue,
      placeholder = "",
      ...rest
    }: {
      errorMessage?: String | null;
      defaultValue?: string | null;
      placeholder?: string;
      value?: string;
    },
    ref
  ) => {
    const INPUT_REF = ref as LegacyRef<HTMLInputElement>;
    return (
      <div>
        <input
          defaultValue={defaultValue || undefined}
          className={`text-field ${errorMessage ? "error" : ""}`}
          placeholder={placeholder}
          {...rest}
          ref={INPUT_REF}
        ></input>
        <p className="text-field-error h4 txt-red mt-1">{errorMessage}</p>
      </div>
    );
  }
);

export default TextField;
