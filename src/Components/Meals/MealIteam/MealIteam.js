import MealForm from "./MealForm";
import classes from "./MealIteam.module.css";
const MealIteam = (props) => {
    // const rupee=String.fromCodePoint(`${&#8377}`)
const price = `Rupees ${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3 >{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div><MealForm /></div>
    </li>
  );
}
export default MealIteam;
