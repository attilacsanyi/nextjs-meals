"use server";

import { createMeal } from "@/lib/meals/meals-dao";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { MealDto } from "./meals-types";

const isInvalid = (value: string) => !value || value.trim() === "";
const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const shareMeal = async (
  prevState: { message?: string },
  formData: FormData
) => {
  const mealDto = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as File,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  } satisfies MealDto;

  // TODO: Validate the form data with zod or similar
  if (
    isInvalid(mealDto.title) ||
    isInvalid(mealDto.summary) ||
    isInvalid(mealDto.instructions) ||
    isInvalid(mealDto.creator) ||
    isInvalid(mealDto.creator_email) ||
    !isValidEmail(mealDto.creator_email) ||
    !mealDto.image ||
    mealDto.image.size === 0
  ) {
    return {
      message: "Invalid user input!",
    };
  }

  await createMeal(mealDto);

  revalidatePath("/meals" /* "layout" */);
  redirect("/meals");
};
