import { Category, Status } from "@prisma/client";
import z from "zod";

const CATEGORY_ARR = Object.values(Category) as string[];
const CATEGORY_ENUM: [string, ...string[]] = [
  CATEGORY_ARR[0],
  ...CATEGORY_ARR.slice(1),
];

const STATUS_ARR = Object.values(Status) as string[];
const STATUS_ENUM: [string, ...string[]] = [
  STATUS_ARR[0],
  ...STATUS_ARR.slice(1),
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
  category: z.enum(CATEGORY_ENUM, { required_error: "This field is required" }),
  status: z.enum(STATUS_ENUM, { required_error: "This field is required" }),
});

export const updateSuggestionSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(55, "Title can't have more than 55 charachters")
    .optional(),
  description: z
    .string()
    .min(1, "Description is required")
    .max(255, "Description can't have more than 255 charachters")
    .optional(),
  category: z
    .enum(CATEGORY_ENUM, { required_error: "This field is required" })
    .optional(),
  status: z
    .enum(STATUS_ENUM, { required_error: "This field is required" })
    .optional(),
});
