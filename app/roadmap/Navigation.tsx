"use client";
import Link from "next/link";
import Spinner from "../components/Spinner";
import { Suggestion } from "@prisma/client";
import { StatusList } from "../suggestionComponents/StatusList";

const Navigation = ({
  status,
  data,
  isLoading,
}: {
  data: Suggestion[];
  isLoading: boolean;
  status: string;
}) => {
  return (
    <div className="status-horizontal-navigation md:hidden">
      <div className="status-horizontal-navigation--container flex">
        {Object.values(StatusList).map((statusSingle) => (
          <Link
            key={statusSingle.value}
            href={`/roadmap?status=${statusSingle.value}`}
            className={`status-horizontal-navigation--single h4  no-underline
        ${
          status === statusSingle.value ? "active" : ""
        } txt-dark-indigo fw-bold`}
          >
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                {statusSingle.label}
                {` (${
                  data.filter(
                    (suggestion) => suggestion.status === statusSingle.value
                  ).length
                }) `}
              </>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
