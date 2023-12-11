"use client";
import { ReactNode } from "react";
import ArrowUp from "../svgs/ArrowUp";

interface Props {
  children: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

const Vote = ({ children, isActive, onClick = () => {} }: Props) => {
  return (
    <button className={`vote ${isActive ? "is-active" : ""}`} onClick={onClick}>
      <ArrowUp />
      {children}
    </button>
  );
};

export default Vote;
