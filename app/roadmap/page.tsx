import { Status, Suggestion, User } from "@prisma/client";
import StatusSuggestionsSummary from "../components/StatusSuggestionSummary";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/nextAuthOptions";
import prisma from "@/prisma/client";
import { StatusList } from "../lists/StatusList";
import Header from "./Header";
import Navigation from "./Navigation";
import { SuggestionWithVotesAndComments } from "../components/SuggestionsSummary";

interface Props {
  searchParams: { status: Status };
}

const RoadPage = async ({ searchParams: { status } }: Props) => {
  if (!Object.values(Status).includes(status)) {
    status = "LIVE";
  }

  // const [data, setData] = useState<Suggestion[]>([]);
  // const values = Object.values(Status);
  // type statusType = (typeof values)[number];
  // const [isLoading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get("/api/suggestions")
  //     .then((res) => setData(res.data))
  //     .finally(() => setLoading(false));
  // }, []);

  const suggestions: SuggestionWithVotesAndComments[] =
    await prisma?.suggestion.findMany({
      include: { Votes: true, Comments: true },
    });

  const session = await getServerSession(nextAuthOptions);
  const user = await prisma?.user.findUnique({
    where: { email: session?.user?.email || "" },
    include: { Votes: true },
  });

  function getColumn(status: Status, data: SuggestionWithVotesAndComments[]) {
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
              <StatusSuggestionsSummary
                key={suggestion.id}
                suggestionSummary={suggestion}
                userVotes={user?.Votes || []}
              />
            ))}
        </div>
      </div>
    );
  }

  if (!suggestions) return;

  return (
    <div className="roadmap-page div-container pb-24 md:mt-14  lg:mt-20">
      <Header />
      <Navigation isLoading={false} data={suggestions} status={status} />
      <div className="mt-6 md:hidden">
        {getColumn(StatusList[status].value, suggestions)}
      </div>
      <div className="flex gap-3 md:mt-8 lg:mt-12 sm:hidden">
        {Object.values(StatusList).map((status) =>
          getColumn(status.value, suggestions)
        )}
      </div>
    </div>
  );
};

export default RoadPage;
