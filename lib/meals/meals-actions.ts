"use server";

import { createMeal } from "@/lib/meals/meals-dao";
import { redirect } from "next/navigation";
import { MealDto } from "./meals-types";

export const shareMeal = async (formData: FormData) => {
  const mealDto = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as File,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  } satisfies MealDto;

  await createMeal(mealDto);

  redirect("/meals");
};
