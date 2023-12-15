"use client";
import ArrowDown from "@/app/components/svgs/ArrowDown";
import {
  Dispatch,
  LegacyRef,
  MutableRefObject,
  ReactNode,
  SetStateAction,
  createContext,
  forwardRef,
  useEffect,
  useRef,
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

const FormDropdownList = ({
  children,
  onChange = () => {},
  errorMessage,
  defaultValue,
}: Props) => {
  const [isActive, setActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState<ValueLabelPair | null>(
    defaultValue || null
  );

  const ref =
    useRef() as LegacyRef<HTMLDivElement> as MutableRefObject<HTMLDivElement>;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest(".form-dropdown-list")) {
      setActive(!isActive);

      // If another dropdown list is active close it
      const activeTarget = document.querySelector(
        ".form-dropdown-list.is-active"
      ) as HTMLDivElement;
      if (activeTarget && activeTarget !== ref.current) {
        activeTarget.click();
      }
    }
  };

  // Close when click outside Dropdown List
  if (typeof Window !== "undefined") {
    onclick = (e) => {
      const target = e.target as HTMLElement;
      if (target.closest(".form-dropdown-list") !== ref.current)
        setActive(false);
    };
  }

  useEffect(() => {
    if (selectedValue) {
      onChange(selectedValue.value);
    }
  }, [selectedValue]);

  return (
    <div>
      <div
        onClick={(e) => handleClick(e)}
        className={`form-dropdown-list w-full  ${isActive ? "is-active" : ""} ${
          errorMessage ? "error" : ""
        }`}
        ref={ref}
      >
        <div className="flex justify-between items-center">
          {selectedValue?.label || "None"}
          <ArrowDown />
        </div>
        <ul className="form-dropdown-options-container">
          <OptionsContext.Provider value={{ selectedValue, setSelectedValue }}>
            {children}
          </OptionsContext.Provider>
        </ul>
      </div>
      {errorMessage ? <p className="h4 txt-red mt-1">{errorMessage}</p> : ""}
    </div>
  );
};
export default FormDropdownList;
