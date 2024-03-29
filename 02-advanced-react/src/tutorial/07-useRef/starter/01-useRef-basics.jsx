import { useEffect, useRef, useState } from 'react';

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);
  const isMounted = useRef(false);

  useEffect(() => {
    // .current provides access to the element that the ref is attached to
    // .focus() focuses on the specified element by highlighting it
    refContainer.current.focus();
  });

  useEffect(() => {
    // Conditional Statement to prevent logic execution on initial render
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log('re-render');
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            id='name'
            ref={refContainer}
            className='form-input'
          />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className='btn'>
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
