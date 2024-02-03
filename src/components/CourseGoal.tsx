import { FC, type PropsWithChildren } from 'react';

// type TheProps = {
//   title: string;
//   description: string;
// };
interface TheProps {
  title: string;
}
type FinalProps = PropsWithChildren<TheProps>;

const CourseGoal: FC<FinalProps> = ({ title, children }) => {
  return (
    <article>
      <div>
        <h1>{title}</h1>
        {children}
      </div>
      <button>DELETE</button>
    </article>
  );
};

export default CourseGoal;
