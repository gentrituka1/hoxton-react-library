import { Button } from "./Button";
import { CheckboxGroup } from "./CheckboxGroup";
import { Input } from "./Input";

export function Menu({ setHungry }: any) {
  return (
    <>
    <menu className="menu">
      <Button
          onClick={() => {
          setHungry(false);
          }}
          size="small"
          >
          Eat
      </Button>
      <Button
          onClick={() => {
          setHungry(true);
          }}

          >
          Workout
      </Button>

      <Button
          onClick={() => {
          setHungry(true);
          }}
          size="big"
          >
          Sleep
      </Button>

      
      <Input type="text" name="something"/>

      <CheckboxGroup question="What's your favourite food?" name="food" options={["Chocolate", "Vegetables", "Fruit", "Potato"]} />


    </menu>
    </>

    
  );
}
