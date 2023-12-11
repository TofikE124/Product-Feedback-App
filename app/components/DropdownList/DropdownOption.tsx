"use client";
import { PropsWithChildren, useContext } from "react";
import { OptionsContext, OptionsContextType } from "./DropdownList";
import CheckIcon from "@/public/assets/shared/icon-check.svg";
import Image from "next/image";

const DropdownOption = ({ children }: PropsWithChildren) => {
  const context = useContext<OptionsContextType | null>(OptionsContext);
  if (!context) return;
  const { selectedValue, setSelectedValue } = context;
  const value = children?.toString();
  return (
    <li
      onClick={() => setSelectedValue(value || null)}
      className="dropdown-option"
      value={value}
    >
      {children}
      {selectedValue === value && <Image src={CheckIcon} alt="Check icon" />}
    </li>
  );
};

export default DropdownOption;
