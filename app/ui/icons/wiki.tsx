import React from "react";

type Props = {
  activeIcon: string;
};

export default function WikiIcon({ activeIcon }: Props) {
  return (
    <svg
      className={`${
        activeIcon === "Wiki" ? "text-red-c1" : "text-gray-c1"
      } hover:text-red-c2 wiki-icon duration-300`}
      viewBox="0 0 48 48"
      height={24}
    >
      <path
        d="M21 40.86H6.09c-1.08 0-1.98-.9-1.98-1.98V20.22c0-1.17.6-1.83 1.74-1.83h.9v-3.36H4.89c-2.49 0-4.5 2.01-4.5 4.5v20.25c0 2.49 2.01 4.5 4.5 4.5H21v-3.42ZM43.14 15h-1.86v3.36h.99c1.08 0 1.62.63 1.62 1.62v18.93c0 1.08-.87 1.98-1.98 1.98H27v3.36h16.14c2.49 0 4.5-2.01 4.5-4.5V19.5c0-2.49-2.01-4.5-4.5-4.5Z"
        fill="currentColor"
      ></path>
      <path
        d="M39.39 4.5c-5.19.69-11.4 2.73-15.36 5.16-3.99-2.43-10.2-4.47-15.36-5.16v30.75c4.26.51 8.67 1.5 13.14 3.24l2.25.99 2.25-.99c4.47-1.74 8.88-2.76 13.14-3.24V4.5h-.06ZM13.14 31.89V9.69c3.21.57 6.93 2.01 8.64 3.39v21.24c-2.49-1.02-5.97-1.95-8.64-2.43Zm21.75 0c-2.64.48-6.15 1.41-8.64 2.43V13.08c1.68-1.41 5.43-2.82 8.64-3.39v22.2Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
