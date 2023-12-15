import { Status } from "@prisma/client";

const values = Object.values(Status);
type statusType = (typeof values)[number];
export const StatusList: Record<
  statusType,
  { value: Status; label: string; description: string; className: string }
> = {
  PLANNED: {
    value: "PLANNED",
    label: "Planned",
    className: "bg-light-salmon",
    description: "Features to be developed in futre",
  },
  IN_PROGRESS: {
    value: "IN_PROGRESS",
    label: "In-Progress",
    className: "bg-levender-violet",
    description: "Features currently being developed",
  },
  LIVE: {
    value: "LIVE",
    label: "Live",
    className: "bg-light-sky-blue",
    description: "Features About to be developed",
  },
};
