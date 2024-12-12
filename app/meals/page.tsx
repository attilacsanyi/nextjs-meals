import Link from "next/link";
import classes from "./page.module.css";

const MealsPage = () => {
  return (
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
  );
};

export default MealsPage;
