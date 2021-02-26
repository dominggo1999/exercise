import React, { useEffect, useState, useRef } from 'react';

const TypingEffect = ({ words }) => {
  const order = useRef(0);
  const [word, setWord] = useState(words[0]);
  const count = useRef(0);
  const increase = useRef(true);
  const isDelay = useRef(false);
  const delay = useRef(8);

  const typeLetter = () => {
    const l = word.length;
    if(count.current < l && increase.current && !isDelay.current) {
      count.current += 1;
      const newWord = word.slice(0, count.current);
      setWord(newWord);
      if (count.current === l) {
        increase.current = false;
        isDelay.current = true;
      }
    }else if (delay.current) {
      delay.current -= 1;
      if(!delay.current) isDelay.current = false;
    }else {
      count.current -= 1;
      const newWord = word.slice(0, count.current);
      if(count.current === 0) {
        order.current += 1;
        delay.current = 8;
        isDelay.current = true;
        increase.current = true;
        setWord(words[order.current]);
      } else{
        setWord(newWord);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(typeLetter, 250);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {word}
    </>
  );
};

export default TypingEffect;
