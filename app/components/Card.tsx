"use client";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  isActive?: boolean;
}

const Card = ({ children, onClick, isActive }: Props) => {
  return (
    <div className={`card ${isActive ? "is-active" : ""}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
