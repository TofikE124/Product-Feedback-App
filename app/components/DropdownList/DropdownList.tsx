"use client";
import {
  Dispatch,
  MouseEvent,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import ArrowDown from "../../svgs/ArrowDown";

export interface OptionsContextType {
  selectedValue: string | null;
  setSelectedValue: Dispatch<SetStateAction<string | null>>;
}

export const OptionsContext = createContext<OptionsContextType | null>(null);

const DropdownList = ({ children }: PropsWithChildren ) => {
  const [isActive, setActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest(".dropdown-list")) {
      setActive(!isActive);
    }
  };

  // Close when click outside Dropdown List
  window.onclick = (e) => {
    const target = e.target as HTMLElement;
    if (!target.closest(".dropdown-list")) {
      setActive(false);
    }
  };

  return (
    <div
      onClick={(e) => handleClick(e)}
      className={`dropdown-list  ${isActive && "is-active"}`}
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
