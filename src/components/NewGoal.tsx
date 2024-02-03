import React from 'react';

const NewGoal: React.FC = () => {
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <input id="description" type="text" />
      </p>
      <button>Add Goal</button>
    </form>
  );
};

export default NewGoal;
