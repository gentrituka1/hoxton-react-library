import { Button } from "./Button";

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
    </menu>
    </>
  );
}
