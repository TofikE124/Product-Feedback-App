import { Category } from "@prisma/client";
import Card from "../components/Card";

const CategoryList = () => {
  const keys = Object.values(Category);
  type CategoryType = (typeof keys)[number];

  const CategoryRecord: Record<CategoryType, string> = {
    UI: "UI",
    UX: "UX",
    BUG: "Bug",
    ENHANCMENT: "Enhancement",
    FEATURE: "Feature",
  };

  return (
    <div className="suggestions-page--header--category-list">
      <Card>All</Card>
      {Object.values(CategoryRecord).map((category, index) => (
        <Card key={index}>{category}</Card>
      ))}
    </div>
  );
};

export default CategoryList;
