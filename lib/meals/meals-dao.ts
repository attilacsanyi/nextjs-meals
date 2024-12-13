import sql from "better-sqlite3";
import fs from "node:fs";
import slugify from "slugify";
import xss from "xss";
import { Meal, MealDto } from "./meals-types";

const db = sql("meals.db");

export const getMeals = async () => {
  // Simulate a slow response
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error("Failed to fetch meals");
  return db.prepare("SELECT * FROM meals").all() as Meal[];
};

export const getMeal = async (mealSlug: string) => {
  // Simulate a slow response
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(mealSlug) as Meal;
};

export const createMeal = async ({
  title,
  summary,
  instructions,
  image: imageFile,
  creator,
  creator_email,
}: MealDto) => {
  const slug = slugify(title, { lower: true });
  const extension = imageFile.name.split(".").pop();
  const filename = `${slug}.${extension}`;

  // Save the image to the public/images folder
  const stream = fs.createWriteStream(`public/images/${filename}`);
  const imageBuffer = await imageFile.arrayBuffer();
  stream.write(Buffer.from(imageBuffer), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });
  stream.end();

  const meal: Omit<Meal, "id"> = {
    title,
    summary,
    creator,
    creator_email,
    slug,
    image: `/images/${filename}`,
    // instructions are not sanitized so we need to do it manually
    instructions: xss(instructions),
  };

  db.prepare(
    "INSERT INTO meals (title, slug, image, summary, instructions, creator, creator_email) VALUES (@title, @slug, @image, @summary, @instructions, @creator, @creator_email)"
  ).run(meal);
};
