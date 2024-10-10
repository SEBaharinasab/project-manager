import React from 'react';
import Button from './Button';

export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelect,
  selectedProjectId,
}) {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add New Project</Button>
      </div>
      <ul className={'mt-8 pl-4 flex flex-col items-stretch gap-1'}>
        {projects.map((project) => {
          let btnClasses =
            'w-full text-left px-2 py-2 rounded-lg hover:text-stone-200 hover:bg-stone-800';
          btnClasses +=
            selectedProjectId === project.id ? ' bg-stone-800 text-stone-200' : ' text-stone-400';
          return (
            <li key={project.id}>
              <button onClick={() => onSelect(project.id)} className={btnClasses}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
