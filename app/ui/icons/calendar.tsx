import React from "react";

type Props = {
  activeIcon: string;
};
export default function CalendarIcon({ activeIcon }: Props) {
  return (
    <svg
      className={`${
        activeIcon === "Calendar concept" ? "text-orange-c1" : "text-gray-c1"
      } hover:text-orange-c2 calendar-icon duration-300`}
      width="24"
      height="24"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M37.3284 4H10.6674C6.98444 4 4 6.98444 4 10.6674V37.3326C4 41.0156 6.98444 44 10.6674 44H37.3326C41.0154 44 44 41.0156 44 37.3326V10.6674C44 6.98444 41.0154 4 37.3326 4H37.3284ZM36.2784 39.864H11.7215C9.73606 39.864 8.12742 38.2554 8.12742 36.27V14.9684H39.8726V36.2742C39.8726 38.2596 38.2638 39.8682 36.2784 39.8682V39.864Z"
          fill="currentColor"
        ></path>
      </g>
    </svg>
  );
}
