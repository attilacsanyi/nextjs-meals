import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";
import { Meal } from "./types";

const MealsGrid = ({ meals }: { meals: Meal[] }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
