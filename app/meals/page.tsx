import Loading from "@/components/loading/loading";
import MealsGrid from "@/components/meals/meals-grid";
import { Meal } from "@/components/meals/types";
import { getMeals } from "@/lib/meals.mjs";
import Link from "next/link";
import { Suspense } from "react";
import classes from "./page.module.css";

const Meals = async () => {
  const meals = (await getMeals()) as Meal[];
  return <MealsGrid meals={meals} />;
};

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Chose your favourite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favourite Recipe</Link>
        </p>
      </header>

      <main className={classes.main}>
        <Suspense fallback={<Loading>Loading meals...</Loading>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
