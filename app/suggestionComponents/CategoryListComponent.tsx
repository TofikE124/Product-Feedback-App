"use client";
import { Category } from "@prisma/client";
import Card from "../components/Card";
import { useRouter, useSearchParams } from "next/navigation";
import CategoryCard from "../components/CategoryCard";
import { CategoryList } from "../lists/categoryList";

const CategoryListComponent = () => {
  const router = useRouter();
  const params = useSearchParams();
  const currentCategory = params.get("category");

  const handleClick = (category: Category | null) => {
    const URLsearchParams = new URLSearchParams(params);
    if (category) {
      URLsearchParams.set("category", category);
    } else {
      URLsearchParams.delete("category");
    }
    router.push(`/?${URLsearchParams.toString()}`);
  };

  return (
    <div className="suggestions-page--header--category-list">
      <Card isActive={!currentCategory} onClick={() => handleClick(null)}>
        All
      </Card>
      {Object.values(CategoryList).map((category, index) => (
        <CategoryCard category={category} key={index} />
      ))}
    </div>
  );
};

export default CategoryListComponent;
