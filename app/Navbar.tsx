"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Skeleton from "./components/Skeleton";

const Navbar = () => {
  const { status, data: session } = useSession();
  return (
    <div className="navbar">
      {status === "loading" ? (
        <Skeleton width={160} height={50} />
      ) : status === "authenticated" ? (
        <button className="btn btn-red" onClick={() => signOut()}>
          Signout
        </button>
      ) : (
        <button className="btn btn-indigo" onClick={() => signIn("google")}>
          Login
        </button>
      )}
    </div>
  );
};

export default Navbar;
