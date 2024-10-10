import React from 'react';
import noProjectSelectedImg from '../assets/no-projects.png';
import Button from './Button';
import H2 from './H2';

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className='mt-24 text-center w-2/3'>
      <img
        src={noProjectSelectedImg}
        alt='An empty task list'
        className='w-16 h-16 object-contain mx-auto'
      />
      <H2 className='text-xl font-bold text-stone-500 my-4'>No project selected</H2>
      <p className='text-stone-400 mb-4'>select a project or getting start with a new one.</p>
      <p className='mt-8'>
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}