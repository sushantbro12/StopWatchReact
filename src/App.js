import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timeInterval;

    if (isRunning && time > 0) {
      timeInterval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timeInterval);
    };
  }, [isRunning, time]);

  const handleStart = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(1500);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const doubleSecondDigits =
    String(seconds).length === 1 ? `0` + seconds : seconds;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-500">
      <div className="flex flex-col items-center justify-center bg-red-400 p-20">
        <div>
          <h1 className="text-9xl font-bold text-white mb-5">
            {minutes}:{doubleSecondDigits}
          </h1>
        </div>
        <div className="flex gap-10">
          <button
            className="bg-white text-red-500 font-bold rounded-sm p-3 "
            onClick={handleStart}
          >
            {isRunning ? "Stop" : "Start"}
          </button>

          <button
            className="bg-white text-red-500 font-bold rounded-sm p-3"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
