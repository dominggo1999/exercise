import React, { useState, useEffect, useRef } from 'react';

const LearnRef = () => {
  const [state, setState] = useState(true);
  const [test, setTest] = useState(0);
  const ref = useRef('anjing');
  console.log('test: ', test);

  useEffect(() => {
    ref.current = test;
    console.log('ref: ', ref.current);
  }, [test]);

  const handleClick = () => {
    setTest(test + 1);
  };

  return (
    <div>
      {console.log('Ref di jsx : ', ref.current)}
      <button onClick={handleClick}>Clcik</button>
      <p>Current : {test}</p>
      <p>Prev : {ref.current}</p>
    </div>
  );
};

export default LearnRef;
