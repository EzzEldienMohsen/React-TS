import React from 'react';
import { type CourseGoals } from '../App';
interface TheProps {
  setGoals: React.Dispatch<React.SetStateAction<CourseGoals[]>>;
}

type FinalProps = React.PropsWithChildren<TheProps>;
const NewGoal: React.FC<FinalProps> = ({ setGoals }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.currentTarget));
    setGoals((prevGoals) => {
      return [
        ...prevGoals,
        {
          title: values.goal.toString(),
          description: values.description.toString(),
          id: Math.random(),
        },
      ];
    });
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" name="goal" />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <input id="description" type="text" name="description" />
      </p>
      <button>Add Goal</button>
    </form>
  );
};

export default NewGoal;
