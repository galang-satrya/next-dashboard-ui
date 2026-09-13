'use client';

import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    // Set initial time only on client to avoid SSR/client mismatch
    setTime(new Date());

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Avoid rendering mismatched time during SSR hydration
  if (!time) {
    return (
      <div className="text-4xl font-mono text-[#9AA1A7]">--:--:--</div>
    );
  }

  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  const day = String(time.getDate()).padStart(2, '0');
  const month = time.toLocaleDateString('en-US', { month: 'long' });
  const year = time.getFullYear();

  const dateString = `${day} ${month} ${year}`;

  return (
    <div className="flex flex-col items-center justify-center mt-3 ml-3 mr-3 rounded-md border border-[#62BF4C]">
      <div className="text-4xl font-mono font-semibold tracking-widest text-[#62BF4C]">
        {hours}:{minutes}:{seconds}
      </div>
      <div className="text-md text-[#62BF4C] mb-2">{dateString}</div>
    </div>
  );
};

export default Clock;