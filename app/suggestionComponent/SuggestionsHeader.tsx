"use client";
import Link from "next/link";
import BlackOverlay from "../components/BlackOverlay";
import Card from "../components/Card";
import Image from "next/image";
import { useState } from "react";
import { Category } from "../components/SuggestionsSummary";
import { signIn, signOut, useSession } from "next-auth/react";
import Skeleton from "../components/Skeleton";

const SuggestionsHeader = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  const { status, data: session } = useSession();

  return (
    <header className="suggestions-page--header">
      <div className="suggestions-page--header--badge">
        <div>
          <h2 className="h2 txt-white">Frontend Mentor</h2>
          <p className="b2 txt-white">Feedback Board</p>
        </div>
        <button
          onClick={() => setMenuActive(!isMenuActive)}
          className={`suggestions-page--header--menu-btn-container ${
            isMenuActive ? "active" : ""
          } cursor-pointer`}
        >
          <span />
        </button>
      </div>
      <div
        className={`suggestions-page--header--menu-container ${
          isMenuActive && "active"
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

        <div className="suggestions-page--header--category-list">
          <Card>All</Card>
          {Object.values(Category).map((category, index) => (
            <Card key={index}>{category}</Card>
          ))}
        </div>
        <div className="suggestions-page--header--roadmap grid gap-6">
          <div className="flex justify-between items-center w-full">
            <h3 className="h3 txt-dark-indigo">Roadmap</h3>
            <Link href="" className="b3 txt-medium-blue underline">
              View
            </Link>
          </div>
          <div className="gap-2">
            <div className="flex gap-4 items-center">
              <div className="small-circle bg-light-salmon"></div>
              <p className="b1 txt-light-slate-grey">Planned</p>
              <p className="b1 txt-light-slate-grey fw-bold ml-auto">2</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="small-circle bg-levender-violet"></div>
              <p className="b1 txt-light-slate-grey">In-Progress</p>
              <p className="b1 txt-light-slate-grey fw-bold ml-auto">2</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="small-circle bg-light-sky-blue"></div>
              <p className="b1 txt-light-slate-grey">Live</p>
              <p className="b1 txt-light-slate-grey fw-bold ml-auto">2</p>
            </div>
          </div>
        </div>
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
