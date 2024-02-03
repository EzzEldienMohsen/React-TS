import React from 'react';
import goalImg from './assets/goals.jpg';
import Header from './components/Header';
import CourseGoalsList from './components/CourseGoalsList';

export interface CourseGoals {
  title: string;
  description: string;
  id: number;
}
export default function App() {
  const [goals, setGoals] = React.useState<CourseGoals[]>([]);
  const handleAddGoal = (): void => {
    setGoals((prevGoals) => {
      return [
        ...prevGoals,
        {
          title: 'mastering react with ts',
          description: 'taking it step by step',
          id: Math.random(),
        },
      ];
    });
  };
  return (
    <main>
      <Header image={{ src: goalImg, alt: 'course goals' }}>
        <h1>Course goals</h1>
      </Header>
      <button onClick={handleAddGoal}>add Goal</button>
      <CourseGoalsList goals={goals} setGoals={setGoals} />
    </main>
  );
}
