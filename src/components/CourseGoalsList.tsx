import React from 'react';
import CourseGoal from './CourseGoal';
import { type CourseGoals } from '../App';
import InfoBox from './InfoBox';

interface TheProps {
  goals: CourseGoals[];
  setGoals: React.Dispatch<React.SetStateAction<CourseGoals[]>>;
}

type FinalProps = React.PropsWithChildren<TheProps>;
const CourseGoalsList: React.FC<FinalProps> = ({ goals, setGoals }) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        There is no project goals yet. Please add some.
      </InfoBox>
    );
  }
  let warningBox: React.ReactNode;
  if (goals.length >= 5) {
    warningBox = (
      <InfoBox mode="warning">
        You have put too much project goals. try to finish this first before
        adding more.. .
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul style={{ marginTop: '1rem' }}>
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
    </>
  );
};

export default CourseGoalsList;
