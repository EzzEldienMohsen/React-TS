import goalImg from './assets/goals.jpg';
import CourseGoal from './components/CourseGoal';
import Header from './components/Header';
export default function App() {
  return (
    <main>
      <Header image={{ src: goalImg, alt: 'course goals' }}>
        <h1>Course goals</h1>
      </Header>
      <CourseGoal title="learn React + TS">
        <p>doing this project to learn how to merge typescript with react</p>
      </CourseGoal>
    </main>
  );
}
