"use client";
import {
  Dispatch,
  MouseEvent,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import ArrowDown from "../svgs/ArrowDown";

export interface OptionsContextType {
  selectedValue: string | null;
  setSelectedValue: Dispatch<SetStateAction<string | null>>;
}

export const OptionsContext = createContext<OptionsContextType | null>(null);

interface Props {
  children: ReactNode;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const DropdownList = ({
  children,
  defaultValue,
  onChange = () => {},
}: Props) => {
  const [isActive, setActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(
    defaultValue || null
  );

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest(".dropdown-list")) {
      setActive(!isActive);
    }
  };

  // Close when click outside Dropdown List
  if (typeof Window !== "undefined") {
    onclick = (e) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".dropdown-list")) {
        setActive(false);
      }
    };
  }

  useEffect(() => {
    onChange(selectedValue || "");
  }, [selectedValue]);

  return (
    <div
      onClick={(e) => handleClick(e)}
      className={`dropdown-list  ${isActive ? "is-active" : ""}`}
    >
      {selectedValue ? (
        <>
          Sort by : <strong>{selectedValue}</strong>
        </>
      ) : (
        "All"
      )}
      <span className="dropdown-list--arrow ml-2">
        <ArrowDown stroke="#fff" />
      </span>
      <ul className="dropdown-options-container">
        <OptionsContext.Provider value={{ selectedValue, setSelectedValue }}>
          {children}
        </OptionsContext.Provider>
      </ul>
    </div>
  );
};

export default DropdownList;
