import React, { useCallback, useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft =useCallback(() => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  },[targetDate]) 

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate,calculateTimeLeft]);

  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <div className="flex flex-col items-center p-4  text-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold mb-3 uppercase tracking-wide">
        Special Deals Ends In
      </h2>

      <div className="flex gap-4 text-center">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">{formatNumber(timeLeft.days)}</span>
          <span className="text-sm uppercase">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">{formatNumber(timeLeft.hours)}</span>
          <span className="text-sm uppercase">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">{formatNumber(timeLeft.minutes)}</span>
          <span className="text-sm uppercase">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">{formatNumber(timeLeft.seconds)}</span>
          <span className="text-sm uppercase">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
