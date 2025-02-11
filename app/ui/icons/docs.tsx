import React from "react";

type Props = {
  activeIcon: string;
};

export default function DocumentIcon({ activeIcon }: Props) {
  return (
    <svg
      viewBox="0 0 49 49"
      width={24}
      height={24}
      className={`${
        activeIcon === "Documents" ? "text-yellow-c1" : "text-gray-c1"
      } hover:text-yellow-c2 docs-icon duration-300`}
    >
      <path
        d="m40.22 14.512-12.33-9.99c-.72-.6-1.65-.93-2.61-.93H11.36c-2.28 0-4.11 1.83-4.11 4.11v33.78c0 2.28 1.86 4.11 4.11 4.11h26.28c2.28 0 4.11-1.83 4.11-4.11v-23.76c0-1.23-.57-2.43-1.53-3.21Zm-13.11-6.81 10.38 9.06c.42.36.18 1.05-.39 1.05h-8.88c-.6 0-1.11-.48-1.11-1.11v-9Zm8.85 33.75H13.01c-.69 0-1.26-.57-1.26-1.29v-31.2c0-.69.57-1.26 1.26-1.26h10.35v10.14c0 2.07 1.68 3.75 3.75 3.75h10.11v18.6c0 .69-.57 1.26-1.26 1.26Z"
        fill="currentColor"
      ></path>
      <path
        d="M17.75 27.232h13.5M17.75 34.402h13.5"
        stroke="currentColor"
        strokeWidth="1.824"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
