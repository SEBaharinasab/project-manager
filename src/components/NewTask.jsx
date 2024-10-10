import React, { useRef, useState } from 'react';
import Modal from './Modal';

export default function NewTask({ onAdd }) {
  const modalRef = useRef();
  const [enteredTask, setEnteredTask] = useState('');
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }
  function handleClick() {
    if (enteredTask === '') {
      modalRef.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask('');
  }
  return (
    <>
      <Modal ref={modalRef} btnCaption={'okay'}>
        <h1>whoops!</h1>
        <p>Do not leave the field blank!!!</p>
      </Modal>
      <div className={'flex items-center gap-4'}>
        <input
          type='text'
          className={'w-64 px-2 py-1 rounded-sm bg-stone-200'}
          value={enteredTask}
          onChange={handleChange}
        />
        <button className={'text-stone-700 hover:text-stone-950'} onClick={handleClick}>
          Add task
        </button>
      </div>
    </>
  );
}
