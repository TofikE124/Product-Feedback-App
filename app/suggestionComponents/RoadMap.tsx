import Link from "next/link";

const RoadMap = () => {
  return (
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
  );
};

export default RoadMap;
