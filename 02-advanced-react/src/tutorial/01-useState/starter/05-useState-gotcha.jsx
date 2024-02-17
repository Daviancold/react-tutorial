import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      console.log('hi');
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <>
      <h1>{value}</h1>
      <button type='button' onClick={handleClick} className='btn'>
        Add
      </button>
    </>
  );
};

export default UseStateGotcha;
