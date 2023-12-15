import React, { LegacyRef, forwardRef } from "react";

const TextField = forwardRef(
  (
    {
      errorMessage,
      defaultValue,
      placeholder = "",
      isMultiline,
      onChange = () => {},
      ...rest
    }: {
      errorMessage?: String | null;
      defaultValue?: string | null;
      placeholder?: string;
      value?: string;
      onChange?: (value: string) => void;
      isMultiline?: boolean;
    },
    ref
  ) => {
    const INPUT_REF = ref as LegacyRef<HTMLInputElement>;
    const TEXTAREA_REF = ref as LegacyRef<HTMLTextAreaElement>;

    return (
      <>
        {isMultiline ? (
          <textarea
            defaultValue={defaultValue || undefined}
            className={`text-field ${errorMessage ? "error" : ""}`}
            placeholder={placeholder}
            {...rest}
            onChange={(e) => onChange(e.target.value)}
            ref={TEXTAREA_REF}
          ></textarea>
        ) : (
          <input
            defaultValue={defaultValue || undefined}
            className={`text-field ${errorMessage ? "error" : ""}`}
            placeholder={placeholder}
            {...rest}
            onChange={(e) => onChange(e.target.value)}
            ref={INPUT_REF}
          ></input>
        )}

        <p className="text-field-error h4 txt-red mt-1">{errorMessage}</p>
      </>
    );
  }
);

export default TextField;
