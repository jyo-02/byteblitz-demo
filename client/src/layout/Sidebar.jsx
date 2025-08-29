import React, { useState } from "react";
import { SiAmazon, SiFacebook, SiUber } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";

const companies = [
  { name: "Amazon", logo: <SiAmazon className="text-yellow-600 w-4 h-4" /> },
  { name: "Facebook", logo: <SiFacebook className="text-blue-600 w-4 h-4" /> },
  {
    name: "Microsoft",
    logo: <FaMicrosoft className="text-blue-800 w-4 h-4" />,
  },
  {
    name: "Uber",
    logo: <SiUber className="text-black dark:text-white w-4 h-4" />,
  },
];

const statusOptions = ["Solved", "Unsolved"];
const difficultyOptions = ["Easy", "Medium", "Hard"];

export default function Sidebar({
  selectedCompanies,
  setSelectedCompanies,
  selectedStatus,
  setSelectedStatus,
  selectedDifficulty,
  setSelectedDifficulty,
}) {
  const handleToggle = (item, list, setList) => {
    setList((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const clearAll = () => {
    setSelectedCompanies([]);
    setSelectedStatus([]);
    setSelectedDifficulty([]);
  };

  return (
    <aside className="w-full max-w-full border-r border-gray-300 dark:border-zinc-800 p-6 bg-gray-200 dark:bg-black text-black dark:text-white space-y-8 overflow-y-auto py-10 max-h-screen">


      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Filters</h2>
        <button
          className="text-xs px-3 py-1 rounded-md 
             bg-gray-100 text-black hover:bg-gray-200
             dark:bg-card dark:text-blue-200 dark:hover:bg-gray-800
             transition duration-150"
          onClick={clearAll}
        >
          Clear All
        </button>
      </div>

      {/* Companies */}
      <FilterGroup
        title="Companies"
        options={companies.map((c) => c.name)}
        selected={selectedCompanies}
        onToggle={(company) =>
          handleToggle(company, selectedCompanies, setSelectedCompanies)
        }
        getLabel={(company) => (
          <>
            <span>{companies.find((c) => c.name === company)?.logo}</span>
            <span>{company}</span>
          </>
        )}
      />

      {/* Status */}
      <FilterGroup
        title="Status"
        options={statusOptions}
        selected={selectedStatus}
        onToggle={(status) =>
          handleToggle(status, selectedStatus, setSelectedStatus)
        }
      />

      {/* Difficulty */}
      <FilterGroup
        title="Difficulty"
        options={difficultyOptions}
        selected={selectedDifficulty}
        onToggle={(level) =>
          handleToggle(level, selectedDifficulty, setSelectedDifficulty)
        }
      />
    </aside>
  );
}

function FilterGroup({ title, options, selected, onToggle, getLabel }) {
  return (
    <div>
      <h3 className="text-sm font-medium mb-2 text-gray-400">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => {
          const isChecked = selected.includes(option);
          return (
            <label
              key={option}
              htmlFor={`${title}-${option}`}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                id={`${title}-${option}`}
                checked={isChecked}
                onChange={() => onToggle(option)}
                className="accent-blue-500 w-4 h-4 border-gray-400 dark:border-gray-600 bg-white dark:bg-black"
              />

              <span className="flex items-center gap-2">
                {getLabel ? getLabel(option) : option}
              </span>
            </label>
          );
        })}
        {title === "Companies"}
      </div>
    </div>
  );
}
