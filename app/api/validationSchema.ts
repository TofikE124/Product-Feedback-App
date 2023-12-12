import { Category } from "@prisma/client";
import z from "zod";

const CATEGORY_ARR = Object.values(Category) as string[];
const CATEGORY_ENUM: [string, ...string[]] = [
  CATEGORY_ARR[0],
  ...CATEGORY_ARR.slice(1),
];

export const createSuggestionSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(55, "Title can't have more than 55 charachters"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(255, "Description can't have more than 255 charachters"),
  category: z.enum(CATEGORY_ENUM),
});
