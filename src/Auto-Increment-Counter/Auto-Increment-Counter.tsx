import React, { useState, useRef, PropsWithChildren } from "react";
export default function AutoIncrementCounter():React.ReactNode {
  const [counter, setCounter] = useState<number>(0);
  const [pause, setPause] = useState<boolean>(true);
  const interval = useRef<null | ReturnType<typeof setInterval>>(null);

  const startTimer = (): void => {
    if (pause) {
      interval.current = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 1000);
      setPause(false);
    }
  };

  const stopTimer = (): void => {
    clearInterval(interval.current || 0);
    setPause(true);
  };

  const resetTimer = (): void => {
    clearInterval(interval.current || 0);
    setPause(true);
    setCounter(0);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={pause ? startTimer : stopTimer}>
        {pause ? "Start" : "Stop"}
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
