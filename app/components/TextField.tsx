import { LegacyRef, forwardRef } from "react";

interface Props {
  errorMessage?: String | null;
  defaultValue?: string | null;
  placeholder?: string;
  value?: string;
  onChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  isMultiline?: boolean;
}

const TextField = forwardRef(
  (
    {
      errorMessage,
      defaultValue,
      placeholder = "",
      isMultiline,
      onChange = () => {},
      ...rest
    }: Props,
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
            onChange={(e) => onChange(e)}
            ref={TEXTAREA_REF}
          ></textarea>
        ) : (
          <input
            defaultValue={defaultValue || undefined}
            className={`text-field ${errorMessage ? "error" : ""}`}
            placeholder={placeholder}
            {...rest}
            onChange={(e) => onChange(e)}
            ref={INPUT_REF}
          ></input>
        )}

        <p className="text-field-error h4 txt-red mt-1">{errorMessage}</p>
      </>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
