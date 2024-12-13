import { getMeal } from "@/lib/meals/meals-dao";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import classes from "./page.module.css";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ mealSlug: string }>;
}): Promise<Metadata> => {
  const { mealSlug } = await params;
  const meal = await getMeal(mealSlug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
};

const MealPage = async ({
  params,
}: {
  params: Promise<{ mealSlug: string }>;
}) => {
  const { mealSlug } = await params;
  const meal = await getMeal(mealSlug);

  if (!meal) {
    notFound();
  }

  // Replace newlines with <br /> tags for HTML
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill alt={meal.title} />
        </div>

        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.title}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>

      <main className={classes.main}>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
};

export default MealPage;
