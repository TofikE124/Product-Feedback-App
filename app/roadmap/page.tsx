"use client";
import { Status, Suggestion } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import StatusSuggestionsSummary from "../components/StatusSuggestionSummary";
import Header from "./Header";
import Navigation from "./Navigation";
import { StatusList } from "../suggestionComponents/RoadMap";
import SuggestionsSummary from "../components/SuggestionsSummary";

interface Props {
  searchParams: { status: Status };
}

const RoadPage = ({ searchParams: { status } }: Props) => {
  if (!Object.values(Status).includes(status)) {
    status = "LIVE";
  }

  const [data, setData] = useState<Suggestion[]>([]);
  const values = Object.values(Status);
  type statusType = (typeof values)[number];
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/suggestions")
      .then((res) => setData(res.data))
      .finally(() => setLoading(false));
  }, []);

  // useEffect(() => {
  //   if (!data) return;

  // //   let tempElements: Record<statusType, JSX.Element[]>;
  // //   values.forEach((value) => {
  // //     const filteredData = data.filter(
  // //       (suggestion) => suggestion.status === value
  // //     );
  // //     tempElements[value] = filteredData.map((suggestion) => (
  // //       <StatusSuggestionsSummary suggestionSummary={suggestion} />
  // //     ));
  // //     setElements(tempElements);
  // //   });
  // // }, [data]);

  function getColumn(status: Status) {
    const currentStatus = StatusList[status];
    return (
      <div className="flex-grow">
        <div className="mb-12">
          <h1 className="h1 txt-dark-indigo fw-bold mb-1">
            {currentStatus.label} (
            {data.filter((suggestion) => suggestion.status === status).length})
          </h1>
          <p className="b3 txt-light-slate-grey">{currentStatus.description}</p>
        </div>
        <div className="flex flex-col gap-4">
          {data
            .filter((suggestion) => suggestion.status === status)
            .map((suggestion) => (
              <StatusSuggestionsSummary suggestionSummary={suggestion} />
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="roadmap-page div-container pb-24">
      <Header />
      <Navigation data={data} isLoading={isLoading} status={status} />
      <div className="mt-6 md:hidden">
        {getColumn(StatusList[status].value)}
      </div>
      <div className="flex gap-3 md:mt-8 lg:mt-12 sm:hidden">
        {Object.values(StatusList).map((status) => getColumn(status.value))}
      </div>
    </div>
  );
};

export default RoadPage;
