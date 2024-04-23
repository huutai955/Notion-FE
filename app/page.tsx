"use client";
import Image from "next/image";
import React, { useState } from "react";
import AIIcons from "./ui/icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import TransitionsEffect from "./ui/effects/transitions";
import DocumentIcon from "./ui/icons/docs";
import ProjectIcon from "./ui/icons/project";
import WikiIcon from "./ui/icons/wiki";
import CalendarIcon from "./ui/icons/calendar";
import { Slide } from "./lib/definitions";
import "./index.scss";

export default function Home() {
  const [activeIcon, setActiveIcon] = useState("AI");
  const slideList: Slide[] = [
    {
      icon: <AIIcons activeIcon={activeIcon} />,
      title: "AI",
      description: "Ask him anything you want. Notion answers you.",
      imageURL: (
        <Image
          unoptimized={true}
          height={500}
          width={800}
          src={"/ai.png"}
          alt="Slide"
        />
      ),
    },
    {
      icon: <DocumentIcon activeIcon={activeIcon} />,
      title: "Documents",
      description:
        "Simple, powerful, elegant. New generation of notes and documents.",
      imageURL: (
        <Image
          unoptimized={true}
          height={500}
          width={800}
          src={"/document.png"}
          alt="Slide"
        />
      ),
    },
    {
      icon: <WikiIcon activeIcon={activeIcon} />,
      title: "Wiki",
      description:
        "Centralize your knowledge. No more desperate searching for answers.",
      imageURL: (
        <Image
          unoptimized={true}
          height={500}
          width={800}
          src={"/wiki.png"}
          alt="Slide"
        />
      ),
    },
    {
      icon: <ProjectIcon activeIcon={activeIcon} />,
      title: "Projects",
      description: "Manage complex projects, avoiding chaos.",
      imageURL: (
        <Image
          unoptimized={true}
          height={500}
          width={800}
          src={"/projects.png"}
          alt="Slide"
        />
      ),
    },
    {
      icon: <CalendarIcon activeIcon={activeIcon} />,
      title: "Calendar concept",
      description: "Manage your time and projects in one place",
      imageURL: (
        <Image
          unoptimized={true}
          height={500}
          width={800}
          src={"/calendar.png"}
          alt="Slide"
        />
      ),
    },
  ];
  const [slideActive, setSlideActive] = useState<Slide>(slideList[0]);

  console.log(activeIcon);
  return (
    <React.Fragment>
      {/* Header */}
      <header className="flex justify-between py-[0.938rem] px-4 items-center">
        {/* Logo */}
        <svg
          className="wordmark_wordmark__gPyj1"
          width={92}
          viewBox="0 0 87 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.805 1.294l16.6-1.226c2.039-.175 2.563-.057 3.845.875l5.299 3.733c.874.642 1.165.817 1.165 1.516v20.473c0 1.283-.466 2.042-2.097 2.158L7.34 29.99c-1.224.058-1.807-.117-2.448-.934L.99 23.982c-.7-.934-.99-1.633-.99-2.45V3.334c0-1.049.466-1.924 1.805-2.04z"
            fill="#fff"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.405.068l-16.6 1.226C.466 1.41 0 2.285 0 3.334v18.198c0 .817.29 1.516.99 2.45l3.902 5.074c.641.817 1.224.992 2.448.934l19.277-1.167c1.63-.116 2.097-.875 2.097-2.158V6.192c0-.663-.262-.854-1.033-1.42a85.473 85.473 0 01-.133-.096L22.25.943c-1.282-.932-1.806-1.05-3.845-.875zM7.776 5.857c-1.574.106-1.931.13-2.825-.597L2.678 3.452c-.231-.234-.115-.526.467-.584l15.958-1.166c1.34-.117 2.038.35 2.562.758l2.737 1.983c.117.059.408.408.058.408l-16.48.992-.204.014zM5.941 26.49V9.11c0-.759.233-1.109.931-1.168L25.8 6.834c.642-.058.932.35.932 1.108v17.264c0 .759-.117 1.401-1.165 1.459l-18.113 1.05c-1.048.058-1.513-.291-1.513-1.225zm17.88-16.448c.116.525 0 1.05-.525 1.11l-.873.173v12.832c-.758.408-1.456.641-2.039.641-.932 0-1.165-.292-1.863-1.166l-5.709-8.982v8.69l1.806.409s0 1.05-1.457 1.05l-4.017.233c-.117-.234 0-.817.407-.933l1.049-.291v-11.49L9.144 12.2c-.117-.525.174-1.283.99-1.342l4.31-.29 5.94 9.098v-8.049l-1.514-.174c-.117-.643.349-1.11.931-1.167l4.02-.234z"
            fill="#000"
          ></path>
          <path
            className="wordmark_fill__RZFeq"
            d="M41.434 21.251v-7.91h.137l5.704 7.91h1.796V9.627h-1.997v7.902h-.137l-5.704-7.902H39.43V21.25h2.005zM54.715 21.429c2.635 0 4.238-1.724 4.238-4.584 0-2.852-1.611-4.584-4.238-4.584-2.618 0-4.237 1.74-4.237 4.584 0 2.86 1.595 4.584 4.237 4.584zm0-1.676c-1.393 0-2.19-1.063-2.19-2.908 0-1.837.797-2.908 2.19-2.908 1.386 0 2.183 1.071 2.183 2.908 0 1.845-.789 2.908-2.183 2.908zM60.778 10.28v2.215h-1.393v1.595h1.393v4.809c0 1.708.806 2.393 2.828 2.393.386 0 .757-.04 1.047-.097v-1.563c-.242.024-.395.04-.677.04-.837 0-1.208-.386-1.208-1.256V14.09h1.885v-1.595h-1.885v-2.216h-1.99zM65.85 21.251h1.99v-8.813h-1.99v8.813zm.991-10.27c.66 0 1.192-.533 1.192-1.201 0-.669-.531-1.209-1.192-1.209-.652 0-1.192.54-1.192 1.209 0 .668.54 1.2 1.192 1.2zM73.299 21.429c2.634 0 4.237-1.724 4.237-4.584 0-2.852-1.611-4.584-4.237-4.584-2.619 0-4.238 1.74-4.238 4.584 0 2.86 1.595 4.584 4.238 4.584zm0-1.676c-1.394 0-2.192-1.063-2.192-2.908 0-1.837.798-2.908 2.192-2.908 1.385 0 2.183 1.071 2.183 2.908 0 1.845-.79 2.908-2.183 2.908zM78.725 21.251h1.998V16.12c0-1.297.75-2.119 1.941-2.119 1.217 0 1.78.677 1.78 2.022v5.228h1.999v-5.703c0-2.103-1.072-3.287-3.037-3.287-1.314 0-2.2.604-2.619 1.587h-.137v-1.41h-1.925v8.813z"
            fill="#000"
          ></path>
        </svg>
        <button className="h-[1.875rem] px-[0.688rem] font-semibold bg-black-c1 text-white text-[0.844rem] rounded hover:bg-black-c3 duration-500">
          Try Notion
        </button>
      </header>

      <div className="max-w-[64rem] m-auto">
        <div className="max-w-3xl flex justify-center flex-col text-center m-auto gap-4 items-center">
          <h2 className="text-black-c2 text-[3.813rem] font-semibold pt-[5.3rem] leading-[4rem] tracking-[-0.063rem]">
            <div className="flex justify-center gap-2">
              <TransitionsEffect delay={0.5}>Write,</TransitionsEffect>
              <TransitionsEffect delay={0.7}>to plan,</TransitionsEffect>
            </div>
            <div className="flex justify-center gap-2">
              <TransitionsEffect className="mr-[0.763rem]" delay={0.9}>
                organize,
              </TransitionsEffect>
              <TransitionsEffect delay={1.1}>enjoy.</TransitionsEffect>
            </div>
          </h2>
          <TransitionsEffect delay={1.3}>
            <p className="text-[1.438rem] font-medium max-w-[34.807rem]">
              Bring your ideas to life with the Notion workspace, <br /> powered
              by AI.
            </p>
          </TransitionsEffect>
          <div className="flex gap-2 justify-center mt-[0.875rem] mb-8">
            <TransitionsEffect delay={1.5}>
              <button className="bg-blue-c1 text-white h-9 px-[0.875rem] rounded text-base font-[570] hover:bg-blue-c3 duration-500">
                Try Notion
              </button>
            </TransitionsEffect>
            <TransitionsEffect delay={1.5}>
              <button className="bg-white text-blue-c1 h-9 px-[0.875rem] rounded text-base font-[570] hover:bg-blue-c2 duration-500">
                Request a demo
              </button>
            </TransitionsEffect>
          </div>
        </div>

        {/* image */}
        <div className="max-w-[50rem] m-auto relative flex justify-center">
          <TransitionsEffect delay={1.7}>
            <video width={800} autoPlay muted loop>
              <source src="/screen.mp4" type="video/ogg" />
            </video>
            <div className="absolute right-[-4.25rem]  p-2 bg-white bottom-[-1.875rem] border border-gray-600-600 rounded shadow-lg shadow-gray-600 ">
              <Image
                className="rounded"
                src={"/mobile.png"}
                width={187}
                height={403}
                alt=""
              />
            </div>
          </TransitionsEffect>
        </div>

        {/* Forbes */}
        <div className="flex flex-col justify-center items-center gap-3 mb-32 text-center mt-14">
          <h2 className="font-serif text-[2.688rem]">
            The all-purpose app, now with AI.
          </h2>
          <Image src={"/forbes.png"} width={66} height={17} alt="" />
        </div>

        {/* Slide */}
        <div className="flex flex-col  items-center">
          <div className="flex justify-center gap-1">
            {slideList.map((item: Slide, index: number) => {
              console.log(item.title);
              return (
                <div
                  key={index}
                  className="flex flex-col gap-1 items-center px-6 cursor-pointer slide-item"
                  onClick={() => {
                    setSlideActive(item);
                    setActiveIcon(item.title);
                  }}
                >
                  {item.icon}
                  <span
                    className={`text-2xl font-semibold  duration-300 ${
                      activeIcon === item.title ? `text-black` : "text-gray-c1 "
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>

          <AnimatePresence>
            <motion.div
              key={slideActive.description}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <p className="my-5 text-black-c2 font-semibold">
                {slideActive.description}
              </p>
            </motion.div>
            <motion.div
              key={slideActive.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {slideActive.imageURL}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </React.Fragment>
  );
}
