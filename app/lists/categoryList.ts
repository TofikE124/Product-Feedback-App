import { Category } from "@prisma/client";

const keys = Object.values(Category);
type CategoryType = (typeof keys)[number];
export const CategoryList: Record<
  CategoryType,
  { value: Category; label: string }
> = {
  UI: { value: "UI", label: "UI" },
  UX: { value: "UX", label: "UX" },
  BUG: { value: "BUG", label: "Bug" },
  ENHANCMENT: { value: "ENHANCMENT", label: "Enhancement" },
  FEATURE: { value: "FEATURE", label: "Feature" },
};
