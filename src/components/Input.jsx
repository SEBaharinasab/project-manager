import React, { forwardRef } from 'react';

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes = {
    p: 'flex flex-col gap-1 my-4',
    label: 'text-sm font-bold uppercase text-stone-500',
    input:
      'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600',
  };
  return (
    <p className={classes.p}>
      <label className={classes.label}>{label}</label>
      {textarea ? (
        <textarea {...props} ref={ref} className={classes.input} />
      ) : (
        <input {...props} ref={ref} className={classes.input} />
      )}
    </p>
  );
});
export default Input;
