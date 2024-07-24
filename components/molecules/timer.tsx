import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";

import { DAY, HOUR, MINUTE, SECOND } from "@/consts/timer";
import { fontMonserrat } from "@/config/fonts";

export const Timer = ({ deadline = new Date().toString() }) => {
  const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
  const [time, setTime] = useState(parsedDeadline - Date.now());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(parsedDeadline - Date.now()),
      1000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={clsx(
        "mx-auto grid grid-cols-4 max-w-[450px] grid-flow-row-dense gap-x-4 items-end justify-center shadow-lg rounded-full p-2",
        fontMonserrat.className
      )}
    >
      {Object.entries({
        Hari: time / DAY,
        Jam: (time / HOUR) % 24,
        Menit: (time / MINUTE) % 60,
        Detik: (time / SECOND) % 60,
      }).map(([label, value]) => (
        <div key={label} className="inline">
          <span className="text-2xl font-semibold">
            {`${Math.floor(value)}`.padStart(2, "0")}
          </span>
          <small className="font-medium"> {label}</small>
        </div>
      ))}
    </div>
  );
};
