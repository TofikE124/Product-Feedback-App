"use client";
import { ReactNode } from "react";
import ArrowLeft from "../svgs/ArrowLeft";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  transparent?: boolean;
}

const BackButton = ({ children, onClick, transparent }: Props) => {
  return (
    <button
      className={`btn-back ${transparent ? "" : "btn-midnight-navy"}`}
      onClick={onClick}
    >
      <ArrowLeft />
      <span>{children}</span>
    </button>
  );
};

export default BackButton;
