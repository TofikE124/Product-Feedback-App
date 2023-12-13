import { Category } from "@prisma/client";
import Card from "../components/Card";

const keys = Object.values(Category);
type CategoryType = (typeof keys)[number];
export const CategoryRecord: Record<
  CategoryType,
  { value: string; label: string }
> = {
  UI: { value: "UI", label: "UI" },
  UX: { value: "UX", label: "UX" },
  BUG: { value: "BUG", label: "Bug" },
  ENHANCMENT: { value: "ENHANCMENT", label: "Enhancement" },
  FEATURE: { value: "FEATURE", label: "Feature" },
};

const CategoryList = () => {
  return (
    <div className="suggestions-page--header--category-list">
      <Card>All</Card>
      {Object.values(CategoryRecord).map((category, index) => (
        <Card key={index}>{category.label}</Card>
      ))}
    </div>
  );
};

export default CategoryList;
