import classes from "./AvilabelMeal.module.css";
import MealIteam from "./MealIteam/MealIteam";
import Card from "../UI/Card";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 230,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 165,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 130,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 190,
  },
];
const AvilableMeal = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealIteam
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvilableMeal;
