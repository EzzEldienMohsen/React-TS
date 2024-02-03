import { Dispatch, FC, SetStateAction, type PropsWithChildren } from 'react';
import { CourseGoals } from '../App';

// type TheProps = {
//   title: string;
//   description: string;
// };
interface TheProps {
  title: string;
  id: number;
  goals: CourseGoals[];
  setGoals: Dispatch<SetStateAction<CourseGoals[]>>;
}
type FinalProps = PropsWithChildren<TheProps>;

const CourseGoal: FC<FinalProps> = ({
  title,
  children,
  id,
  goals,
  setGoals,
}) => {
  const handleDelete = (id: number) => {
    const newGoals = goals.filter((goal) => id !== goal.id);
    setGoals([...newGoals]);
  };
  return (
    <article>
      <div>
        <h1>{title}</h1>
        {children}
      </div>
      <button onClick={() => handleDelete(id)}>DELETE</button>
    </article>
  );
};

export default CourseGoal;
