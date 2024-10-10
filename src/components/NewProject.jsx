import React, { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';
import H2 from './H2';

export default function NewProject({ onAdd, onCancel }) {
  const modalRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    // Store inputs values in some variables
    const titleInputData = titleRef.current.value;
    const descriptionInputData = descriptionRef.current.value;
    const dueDateInputData = dueDateRef.current.value;

    // Validate the given data
    if (
      titleInputData.trim() === '' ||
      descriptionInputData.trim() === '' ||
      dueDateInputData.trim() === ''
    ) {
      modalRef.current.open();
      // Return and stop saving wrong data
      return;
    }

    // Save data if is valid
    onAdd({
      title: titleInputData,
      description: descriptionInputData,
      dueDate: dueDateInputData,
    });

    // Clear inputs for new data
    titleRef.current.value = null;
    descriptionRef.current.value = null;
    dueDateRef.current.value = null;
  }

  return (
    <>
      <Modal ref={modalRef} btnCaption={'okay'}>
        <H2>Woops!</H2>
        <p className='text-stone-800 mb-4'>looks like you forget to enter a value.</p>
        <p className='text-stone-800 mb-4'>
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
            <button className='text-stone-800 hover:text-stone-950' onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type='text' ref={titleRef} label={'Title'} />
          <Input ref={descriptionRef} label={'Description'} textarea />
          <Input type='date' ref={dueDateRef} label={'Due Date'} />
        </div>
      </div>
    </>
  );
}
