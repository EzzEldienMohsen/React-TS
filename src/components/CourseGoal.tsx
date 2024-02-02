// type TheProps = {
//   title: string;
//   description: string;
// };
interface TheProps {
  title: string;
  description: string;
}
const CourseGoal = ({ title, description }: TheProps) => {
  return (
    <article>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <button>DELETE</button>
    </article>
  );
};

export default CourseGoal;
