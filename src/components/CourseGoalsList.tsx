import React from 'react';
import CourseGoal from './CourseGoal';
import { type CourseGoals } from '../App';

interface TheProps {
  goals: CourseGoals[];
  setGoals: React.Dispatch<React.SetStateAction<CourseGoals[]>>;
}

type FinalProps = React.PropsWithChildren<TheProps>;
const CourseGoalsList: React.FC<FinalProps> = ({ goals, setGoals }) => {
  return (
    <ul>
      {goals.map((goal) => {
        return (
          <li key={goal.id}>
            <CourseGoal
              title={goal.title}
              id={goal.id}
              goals={goals}
              setGoals={setGoals}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        );
      })}
    </ul>
  );
};

export default CourseGoalsList;
