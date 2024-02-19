import { useEffect } from "react";
import { useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => { setToggle(!toggle); }}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    // const intID = setInterval(() => {
    //   console.log('hello from interval');
    // }, 1000);
    // return () => {
    //   clearInterval(intID); // returns clearInterval, which is executed only when this component
    //   console.log('cleanup'); // is unmounted
    // };
    const someFunc = () => {
      // some logic
    }
    window.addEventListener('scroll', someFunc);
    return () => window.removeEventListener('scroll', someFunc);
  }, [])
  return <h1>Hello There</h1>
}

export default CleanupFunction;
