import { Button } from "./Button";

export function Main({ setHungry }: any) {
  return (
    <>
      <Button
        onClick={() => {
          setHungry(false);
        }}
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
      >
        Sleep
      </Button>
    </>
  );
}
