import React from 'react';
import NewTask from './NewTask';

export default function Tasks({ onAdd, onDelete, tasks }) {
  return (
    <section className={''}>
      <h2 className='text-2xl font-bold text-stone-700 mb-4'>Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length !== 0 ? (
        <ul className='p-4 mt-8 rounded-md bg-stone-100'>
          {tasks.map((task) => (
            <li key={task.id} className='flex justify-between my-4'>
              <span>{task.text}</span>
              <button
                onClick={() => onDelete(task.id)}
                className='text-stone-700 hover:text-red-500'
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-stone-800 my-4'>no tasks yet!</p>
      )}
    </section>
  );
}
