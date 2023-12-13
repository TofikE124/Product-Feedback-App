"use client";
import ArrowDown from "@/app/svgs/ArrowDown";
import {
  Dispatch,
  LegacyRef,
  ReactNode,
  SetStateAction,
  createContext,
  forwardRef,
  useEffect,
  useState,
} from "react";
type ValueLabelPair = { value: string; label: string };

export interface OptionsContextType {
  selectedValue: ValueLabelPair | null;
  setSelectedValue: Dispatch<SetStateAction<ValueLabelPair | null>>;
}

export const OptionsContext = createContext<OptionsContextType | null>(null);

interface Props {
  children: ReactNode;
  errorMessage?: string | null;
  defaultValue?: ValueLabelPair | null;
  onChange?: (value: string) => void;
}

const FormDropdownList = forwardRef(
  (
    {
      children,
      onChange = () => {},
      errorMessage,
      defaultValue,
      ...rest
    }: Props,
    ref
  ) => {
    const [isActive, setActive] = useState(false);
    const [selectedValue, setSelectedValue] = useState<ValueLabelPair | null>(
      defaultValue || null
    );

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLElement;
      if (target.closest(".form-dropdown-list")) {
        setActive(!isActive);
      }
    };

    // Close when click outside Dropdown List
    if (typeof Window !== "undefined") {
      onclick = (e) => {
        const target = e.target as HTMLElement;
        if (!target.closest(".form-dropdown-list")) {
          setActive(false);
        }
      };
    }

    useEffect(() => {
      console.log(selectedValue);
      if (selectedValue) {
        onChange(selectedValue.value);
      }
    }, [selectedValue]);

    return (
      <div>
        <div
          onClick={(e) => handleClick(e)}
          className={`form-dropdown-list w-full  ${
            isActive ? "is-active" : ""
          } ${errorMessage ? "error" : ""}`}
        >
          <div className="flex justify-between items-center">
            {selectedValue?.label || "None"}
            <ArrowDown />
          </div>
          <ul className="form-dropdown-options-container">
            <OptionsContext.Provider
              value={{ selectedValue, setSelectedValue }}
            >
              {children}
            </OptionsContext.Provider>
          </ul>
        </div>
        {errorMessage ? <p className="h4 txt-red mt-1">{errorMessage}</p> : ""}
      </div>
    );
  }
);

export default FormDropdownList;
