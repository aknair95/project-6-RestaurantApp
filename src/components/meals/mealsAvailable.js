import Card from "../UI/card";
import classes from "./mealsAvailable.module.css";
import MealItem from "./mealItem/mealItem";

const mealsData = [
  {
    Id: "1",
    Name: "Masala Dosa",
    Description: "South special",
    Price: "Rs 80",
  },
  {
    Id: "2",
    Name: "Chole Bhature",
    Description: "Delhi special",
    Price: "Rs 150",
  },
  {
    Id: "3",
    Name: "Chole Kulche",
    Description: "North special",
    Price: "Rs 120",
  },
];

const MealsAvailable = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {
           mealsData.map((item) => {
            return (
              <MealItem
                key={item.Id}
                name={item.Name}
                description={item.Description}
                price={item.Price}
              />
            )})}
        </ul>
      </Card>
    </section>
  );
};

export default MealsAvailable;
