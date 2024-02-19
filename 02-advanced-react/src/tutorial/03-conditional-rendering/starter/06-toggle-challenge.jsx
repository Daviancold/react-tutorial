import { useState } from 'react';

const Alert = () => {
  return <div className='alert alert-danger'>Hello World</div>;
}

const ToggleChallenge = () => {

  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      <button type='button' className='btn' onClick={() => { setShowAlert(!showAlert) }}>Press Me</button>
      {showAlert && <Alert />}
    </div>
  )
};

export default ToggleChallenge;
