"use client";
import CheckIcon from "@/public/assets/shared/icon-check.svg";
import Image from "next/image";
import { PropsWithChildren, ReactNode, useContext } from "react";
import { OptionsContext, OptionsContextType } from "./DropdownList";

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
