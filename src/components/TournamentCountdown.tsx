import { useState, useEffect } from 'react';
import { Countdown } from 'react-daisyui';

export function TournamentCountdown() {
  const [weeks, setWeeks] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const target = new Date('06/19/2025 09:00');
      const difference = target.getTime() - new Date().getTime();
      const diffInSeconds: number = Math.abs(difference) / 1000;
      const w = Math.floor(diffInSeconds / 7 / 60 / 60 / 24);
      const d = Math.floor((diffInSeconds / 60 / 60 / 24) % 7);
      const h = Math.floor((diffInSeconds / 60 / 60) % 24);
      const m = Math.floor((diffInSeconds / 60) % 60);
      const s = Math.floor(diffInSeconds % 60);
      console.log(s);
      setWeeks(w);
      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [weeks, days, hours, minutes, seconds]);

  return (
    <div className="grid grid-flow-col gap-3">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <Countdown className="font-mono text-4xl" value={weeks} /> weeks
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <Countdown className="font-mono text-4xl" value={days} /> hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <Countdown className="font-mono text-4xl" value={hours} /> hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <Countdown className="font-mono text-4xl" value={minutes} /> minutes
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-4xl">
          <span style={{["--value" as any]: seconds}}></span>
        </span> seconds
      </div>
    </div>
  );
  // return (
  //   <div className="flex gap-5">
  //     <div>
  //       <Countdown className="font-mono text-4xl" value={weeks} /> weeks
  //     </div>
  //     <div>
  //       <Countdown className="font-mono text-4xl" value={days} /> hours
  //     </div>
  //     <div>
  //       <Countdown className="font-mono text-4xl" value={hours} /> hours
  //     </div>
  //     <div>
  //       <Countdown className="font-mono text-4xl" value={minutes} /> minutes
  //     </div>
  //     <div>
  //       <Countdown className="font-mono text-4xl" value={seconds} /> seconds
  //     </div>
  //   </div>
  // );
}
