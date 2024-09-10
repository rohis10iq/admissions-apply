import { Button } from "@mui/material";
import { useState } from "react";

const HeaderSearch = () => {
  const list = [
    "all",
    "courses",
    "Uni, colleges & schools",
    "hostels & share rooms academies scholarships",
    "internships",
  ];
  const [active, setActive] = useState("all");
  return (
    <div className="bg-[#26A9856B] rounded-[30px] max-w-[842px] w-full pt-[28px] px-3 pb-2">
      <ul className="flex justify-around ">
        {list.map((obj) => (
          <li key={obj}>
            <a
              href="/"
              className={`capitalize text-white text-base border-[#00FFB6] ${
                obj === active ? "border-b-2" : ""
              }`}
              onClick={() => setActive(obj)}
            >
              {obj}
            </a>
          </li>
        ))}
      </ul>
      <div className="bg-[#6D978B] px-[20px] h-[43px] rounded-[20px] flex items-center mt-5">
        <Button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              stroke="#EDEDED"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 22L20 20"
              stroke="#EDEDED"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Button>
        <input type="text" className="w-full bg-transparent" placeholder="Search for courses, uni & colleges and information"/>
      </div>
    </div>
  );
};

export default HeaderSearch;
