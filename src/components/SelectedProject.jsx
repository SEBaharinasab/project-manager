import React from 'react';
import Tasks from './Tasks';

export default function SelectedProject({ project, onDelete, onAddTask, onDeleteTask, tasks }) {
  const formattedProjectDueDate = new Date(project.dueDate).toLocaleDateString('en-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div className='w-[35rem] mt-16'>
      <header className='pb-4 mb-4 border-b-2 border-stone-300'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold text-stone-600 mb-2'>{project.title}</h1>
          <button className='text-stone-600 hover:text-stone-950' onClick={onDelete}>
            Delete
          </button>
        </div>
        <p className='mb-4 text-stone-400'>{formattedProjectDueDate}</p>
        <p className='border-l-2 border-stone-400 ml-1 pl-1 text-stone-600 whitespace-pre-wrap'>
          {project.description}
        </p>
      </header>
      <Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask} />
    </div>
  );
}
