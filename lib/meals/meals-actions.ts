"use server";

import { Meal } from "./meals-types";

export const shareMeal = async (formData: FormData) => {
  const meal = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as string,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  } satisfies Omit<Meal, "id" | "slug">;

  console.log(meal);
};
