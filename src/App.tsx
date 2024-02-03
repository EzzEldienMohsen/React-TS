import React from 'react';
import goalImg from './assets/goals.jpg';
import CourseGoal from './components/CourseGoal';
import Header from './components/Header';

interface CourseGoals {
  title: string;
  description: string;
  id: number;
}
export default function App() {
  const [goals, setGoals] = React.useState<CourseGoals[]>([]);
  const handleAddGoal = (): void => {
    setGoals([
      {
        title: 'mastering react with ts',
        description: 'taking it step by step',
        id: 1,
      },
    ]);
  };
  return (
    <main>
      <Header image={{ src: goalImg, alt: 'course goals' }}>
        <h1>Course goals</h1>
      </Header>
      <button onClick={handleAddGoal}>add Goal</button>
      <CourseGoal title="learn React + TS">
        <p>doing this project to learn how to merge typescript with react</p>
      </CourseGoal>
    </main>
  );
}
