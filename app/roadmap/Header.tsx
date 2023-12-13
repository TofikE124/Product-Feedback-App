import React from "react";
import BackButton from "../components/BackButton";
import Link from "next/link";

const Header = () => {
  return (
    <header className="roadmap-page--header bg-midnight-navy flex justify-between">
      <div className="flex flex-col gap-1">
        <BackButton />
        <h1 className="h1 txt-white">Roadmap</h1>
      </div>
      <Link
        href="/create"
        className="btn btn-violet btn-small h4 grid items-center"
      >
        + Add Feedback
      </Link>
    </header>
  );
};

export default Header;
