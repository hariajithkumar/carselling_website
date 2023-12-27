import React, { useEffect, useState } from 'react';

const Counters = ({ targetValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = targetValue / 150;

    if (count < targetValue) {
      const timeoutId = setTimeout(() => {
        setCount((prevCount) => Math.ceil(prevCount + increment));
      }, 1);

      return () => clearTimeout(timeoutId);
    }

    return undefined;
  }, [count, targetValue]);

  return <span>{count}</span>;
};

const Counter = () => {
  const countersData = [
    { id: 1, targetValue: 100 },
    { id: 2, targetValue: 250 },
    // Add more counter data as needed
  ];

  return (
    <div>
      {countersData.map((counterData) => (
        <div key={counterData.id}>
          <p>
            Counter {counterData.id}: <Counters targetValue={counterData.targetValue} />
          </p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
