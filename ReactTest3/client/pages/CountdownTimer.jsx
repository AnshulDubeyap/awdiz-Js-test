import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count <= 0) {
      return;
    }

    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div>
      <h1>{count > 0 ? `Countdown: ${count}` : "Time's up!"}</h1>
    </div>
  );
};

export default CountdownTimer;
