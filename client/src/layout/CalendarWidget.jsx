import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useEffect, useState } from "react";
import { getActiveSubmissionDays } from "@/lib/api/problem";

// ✅ Make sure there are no undefined values
// const activeDays = [
//   new Date(2025, 7, 2),
//   new Date(2025, 7, 3),
//   new Date(2025, 7, 4),
// ].filter(Boolean); // filter out any accidental undefined

const CalendarWidget = () => {
  const [activeDays, setActiveDays] = useState([]);

  useEffect(() => {
    const fetchActiveDays = async () => {
      try {
        const days = await getActiveSubmissionDays();
        console.log(days, "these are the days");

        const parsed = days.map((dateStr) => new Date(dateStr));
        setActiveDays(parsed);
      } catch (err) {
        console.error("Failed to fetch submission days", err);
      }
    };

    fetchActiveDays();
  }, []);

  return (
    <div className="flex justify-center w-full">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg px-6 py-5 max-w-[360px] w-full border border-gray-200 dark:border-zinc-700">
        <div className="mb-4 text-center">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            📆 Track Progress
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            View your activity by date
          </p>
        </div>

        <DayPicker
          mode="single"
          modifiers={{
            active: activeDays,
          }}
          modifiersClassNames={{
            active: "active-tick",
            today: "today-highlight",
          }}
          classNames={{
            months: "flex flex-col",
            month: "space-y-4",
            caption: "flex justify-between items-center px-4",
            caption_label:
              "text-sm font-medium text-gray-700 dark:text-gray-200",
            nav: "space-x-2 flex items-center",
            nav_button:
              "h-7 w-7 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded transition",
            table: "w-full border-collapse",
            head_row: "flex justify-between px-2",
            head_cell:
              "text-gray-500 dark:text-gray-400 w-9 text-center font-normal text-xs",
            row: "flex justify-between px-2",
            cell: "relative h-9 w-9 text-center text-sm rounded-md transition cursor-pointer",
            day_selected: "bg-blue-600 text-white",
          }}
        />
      </div>

      {/* Styling for ✅ and 🟢 */}
      <style>{`
  .active-tick {
    position: relative;
    color: inherit;
  }

  .active-tick::after {
    content: '\\2714'; /* ✔ Check mark */
    color: #22c55e; /* Tailwind's emerald-500 */
    font-size: 1rem;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    background: rgba(34, 197, 94, 0.1); /* Soft green glow */
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 6px rgba(34, 197, 94, 0.2);
  }

  .today-highlight {
    background: #2563eb !important; /* Tailwind blue-600 */
    color: #ffffff !important;
    border-radius: 50% !important;
    font-weight: 700 !important;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.3);
    transition: background 0.3s ease, box-shadow 0.3s ease;
  }

  
`}</style>
    </div>
  );
};

export default CalendarWidget;
