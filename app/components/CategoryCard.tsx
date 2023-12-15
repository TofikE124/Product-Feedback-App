"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Card from "./Card";
import { Category } from "@prisma/client";

const CategoryCard = ({
  category: { value, label },
}: {
  category: { value: Category; label: string };
}) => {
  const router = useRouter();
  const params = useSearchParams();
  const currentCategory = params.get("category");

  const handleClick = (category: string | null) => {
    const URLsearchParams = new URLSearchParams(params);
    if (category) {
      URLsearchParams.set("category", category);
    } else {
      URLsearchParams.delete("category");
    }
    router.push(`/?${URLsearchParams.toString()}`);
  };
  return (
    <Card
      isActive={currentCategory === value}
      onClick={() => handleClick(value)}
    >
      {label}
    </Card>
  );
};

export default CategoryCard;
