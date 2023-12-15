import { Status, Suggestion } from "@prisma/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { StatusList } from "../lists/StatusList";

const RoadMapComponent = () => {
  const [data, setData] = useState<Suggestion[]>([]);

  useEffect(() => {
    axios.get<Suggestion[]>("/api/suggestions").then((res) => {
      setData(res.data);
    });
  }, []);

  if (!data) return;

  return (
    <div className="suggestions-page--header--roadmap grid gap-6">
      <div className="flex justify-between items-center w-full">
        <h3 className="h3 txt-dark-indigo">Roadmap</h3>
        <Link href="/roadmap" className="b3 txt-medium-blue underline">
          View
        </Link>
      </div>
      <div className="gap-2">
        {Object.values(StatusList).map((status) => (
          <div key={status.value} className="flex gap-4 items-center">
            <div className={`small-circle ${status.className}`}></div>
            <p className="b1 txt-light-slate-grey">{status.label}</p>
            <p className="b1 txt-light-slate-grey fw-bold ml-auto">
              {[...data].filter((obj) => obj.status === status.value).length}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadMapComponent;
