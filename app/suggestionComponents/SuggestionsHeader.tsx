"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import BlackOverlay from "../components/BlackOverlay";
import Skeleton from "../components/Skeleton";
import CategoryList from "./CategoryList";
import RoadMapComponent from "./RoadMapComponent";
import Badge from "./Badge";

const SuggestionsHeader = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  const { status, data: session } = useSession();

  return (
    <header className="suggestions-page--header">
      <Badge
        isMenuActive={isMenuActive}
        onClick={() => setMenuActive(!isMenuActive)}
      />
      <div
        className={`suggestions-page--header--menu-container ${
          isMenuActive ? "active" : ""
        }`}
      >
        <div className="md:hidden mx-auto">
          {status === "authenticated" ? (
            <Image
              width={32}
              height={32}
              src={session.user?.image || "https://i.stack.imgur.com/34AD2.jpg"}
              alt="profile picture"
              className="rounded-full"
            />
          ) : status === "loading" ? (
            <Skeleton width={32} height={32} />
          ) : (
            ""
          )}
        </div>
        <CategoryList />
        <RoadMapComponent />
        <div
          className={`md:hidden text-center ${
            status === "authenticated" ? "mt-auto" : ""
          }`}
        >
          {status === "unauthenticated" ? (
            <button className="btn btn-indigo" onClick={() => signIn("google")}>
              Login
            </button>
          ) : (
            <button className="btn btn-red" onClick={() => signOut()}>
              Signout
            </button>
          )}
        </div>
      </div>

      {isMenuActive && <BlackOverlay onClick={() => setMenuActive(false)} />}
    </header>
  );
};

export default SuggestionsHeader;
