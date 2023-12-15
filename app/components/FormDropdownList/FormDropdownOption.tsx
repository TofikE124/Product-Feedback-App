"use client";
import CheckIcon from "@/public/assets/shared/icon-check.svg";
import Image from "next/image";
import { PropsWithChildren, ReactNode, useContext } from "react";
import { OptionsContext, OptionsContextType } from "./FromDropdownList";
import { useRouter } from "next/navigation";

const FormDropdownOption = ({
  children,
  value,
}: {
  children: ReactNode;
  value: string;
}) => {
  const context = useContext<OptionsContextType | null>(OptionsContext);
  if (!context) return;
  const { selectedValue, setSelectedValue } = context;

  const handleClick = () => {
    setSelectedValue({ value: value, label: children?.toString() || "" });
  };

  return (
    <li
      onClick={() => handleClick()}
      className="form-dropdown-option flex justify-between items-center"
      value={value}
    >
      {children}
      {selectedValue?.value === value && (
        <Image src={CheckIcon} alt="Check icon" />
      )}
    </li>
  );
};

export default FormDropdownOption;
