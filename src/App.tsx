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
    </main>
  );
}
