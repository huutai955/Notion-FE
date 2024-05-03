"use client";
import React, { useState } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

import "./index.scss";
import { cloneDeep, isArray } from "lodash";
import dynamic from "next/dynamic";
const BlockNotes = dynamic(() => import("@/components/blocknote"), {
  ssr: false,
});

type Props = {};

export default function Navbar({}: Props) {
  const [blocks, setBlocks] = useState<any[]>([
    {
      id: "1",
      title: "United",
      level: 1,
      isOpen: true,
      children: [
        {
          id: "dd9a5a22-425f-48bf-bc69-4adbd9106fc8",
          title: "United",
          level: 2,
          isOpen: true,
          children: [
            {
              id: "7e54cff8-e104-40ff-8591-2b03be02cd90",
              title: "United",
              level: 3,
              isOpen: true,
              children: [
                {
                  id: "3b0ab48b-06a3-47fb-954d-cfcbcbf462d0",
                  title: "United",
                  level: 4,
                  isOpen: true,
                  children: [
                    {
                      id: "c2090031-0127-4ac9-a087-82275b792390",
                      title: "United",
                      level: 5,
                      isOpen: true,
                      children: [
                        {
                          id: "783b4209-6ab9-4a16-b0fa-4d41e1e8b25d",
                          title: "United",
                          level: 6,
                          isOpen: true,
                          children: [
                            {
                              id: "a8418662-63b8-49e7-ae4f-862a0b3f8d25",
                              title: "United",
                              level: 7,
                              isOpen: true,
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
  const [block, setBlock] = useState({
    id: "1",
    title: "United",
    level: 1,
    isOpen: true,
    children: [
      {
        id: "dd9a5a22-425f-48bf-bc69-4adbd9106fc8",
        title: "United",
        level: 2,
        isOpen: true,
        children: [
          {
            id: "7e54cff8-e104-40ff-8591-2b03be02cd90",
            title: "United",
            level: 3,
            isOpen: true,
            children: [
              {
                id: "3b0ab48b-06a3-47fb-954d-cfcbcbf462d0",
                title: "United",
                level: 4,
                isOpen: true,
                children: [
                  {
                    id: "c2090031-0127-4ac9-a087-82275b792390",
                    title: "United",
                    level: 5,
                    isOpen: true,
                    children: [
                      {
                        id: "783b4209-6ab9-4a16-b0fa-4d41e1e8b25d",
                        title: "United",
                        level: 6,
                        isOpen: true,
                        children: [
                          {
                            id: "a8418662-63b8-49e7-ae4f-862a0b3f8d25",
                            title: "United",
                            level: 7,
                            isOpen: true,
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });

  const handleAddItem = (arr: any, item: any): any => {
    let value = null;
    const handleAddItemClosure = (arr: any) => {
      arr.forEach((element: any) => {
        if (isArray(element.children) && element.id !== item.id) {
          handleAddItemClosure(element.children);
        }
        if (element.id === item.id) {
          value = element;
        }
      });
    };
    handleAddItemClosure(arr);
    return value;
  };

  function removeElementById(array: any, id: any): any {
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i].id === id) {
        array.splice(i, 1);
        return;
      }

      if (array[i].children.length > 0) {
        if (removeElementById(array[i].children, id)) {
          return;
        }
      }
    }
  }

  const handleExpand = (array: any, item: any): any => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === item) {
        array[i].isOpen = !array[i].isOpen;
        return;
      }

      if (array[i].children.length > 0) {
        if (handleExpand(array[i].children, item)) {
          return;
        }
      }
    }
  };

  const handleEditTitle = (arr: any, item: any) => {
    const rs = cloneDeep(arr);
    return rs.map((element: any) => {
      return {
        ...element,
        title: element.id === item.id ? item.title : element.title,
        children:
          element.children.length > 0 &&
          handleEditTitle(element.children, item),
      };
    });
  };
  const handleRenderBlock = (arr: any) => {
    return arr.map((item: any, index: number) => {
      return (
        // <div key={item.id}>
        //   <div
        //     className="flex gap-3 items-center p-2 bg-gray-600 mb-2"
        //     style={{ marginLeft: item.level * 20 }}
        //   >
        //     {item.title}
        //     <button
        //       className="p-2 bg-red-200 rounded"
        //       onClick={() => {
        //         const rs = cloneDeep(blocks);
        //         const value = handleAddItem(rs, item);
        //         value.children.push({
        //           id: uuidv4(),
        //           title: "United",
        //           level: value.level + 1,
        //           isOpen: true,
        //           children: [],
        //         });
        //         setBlocks(rs);
        //       }}
        //     >
        //       Add A Page
        //     </button>
        //     <button
        //       className="bg-red-100 p-2 rounded"
        //       onClick={() => {
        //         const rs = cloneDeep(blocks);
        //         removeElementById(rs, item.id);
        //         setBlocks(rs);
        //       }}
        //     >
        //       Remove Item
        //     </button>
        //     {item.children.length > 0 ? (
        //       <button
        //         className="bg-red-100 p-2 rounded"
        //         onClick={() => {
        //           const rs = cloneDeep(blocks);
        //           handleExpand(rs, item.id);
        //           setBlocks(rs);
        //         }}
        //       >
        //         Expand
        //       </button>
        //     ) : null}
        //   </div>
        //   {item.children.length > 0 && item.isOpen
        //     ? handleRenderBlock(item.children)
        //     : null}
        // </div>
        <div key={item.id}>
          <div
            className="pl-4 pr-2 py-[5px] flex items-center block-item justify-between cursor-pointer"
            style={{ marginLeft: item.level * 5 }}
          >
            <div className="flex gap-2">
              <IoDocumentTextOutline className="w-5 h-5 document cursor-pointer" />
              <FaChevronRight
                className="chevon cursor-pointer"
                onClick={() => {
                  const rs = cloneDeep(blocks);
                  handleExpand(rs, item.id);
                  setBlocks(rs);
                }}
              />
              <p
                className="text-[14px] font-medium text-gray-c5"
                onClick={() => {
                  setBlock(item);
                }}
              >
                {item.title ? item.title : "Untitled"}
              </p>
            </div>
            <div>
              <FaPlus
                className="text-red-500 w-4 h-4 cursor-pointer"
                onClick={() => {
                  const rs = cloneDeep(blocks);
                  const value = handleAddItem(rs, item);
                  value.children.push({
                    id: uuidv4(),
                    title: "",
                    level: value.level + 1,
                    isOpen: true,
                    children: [],
                  });
                  setBlocks(rs);
                }}
              />
            </div>
          </div>
          {item.children.length > 0 && item.isOpen
            ? handleRenderBlock(item.children)
            : null}
        </div>
      );
    });
  };
  return (
    <div className="flex">
      <div className="w-[240px] h-screen bg-gray-c2 flex flex-col">
        <div className="py-[6px] px-[8px]">
          <div className="flex items-center justify-between cursor-pointer hover:bg-red-100 py-[6px] px-[8px] rounded">
            <div className="flex items-center gap-2">
              <div className="text-[13.431px] w-5 h-5 bg-gray-c3 flex rounded-[2px] text-gray-c4 font-medium uppercase items-center justify-center">
                h
              </div>
              <p className="text-[14px] font-medium tracking-tighter text-black-c4 ">
                Huu Tai
              </p>
            </div>
            <button>
              <IoCreateOutline className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="pt-[6px] px-[8px] pb-[20px] shrink overflow-y-auto">
          {handleRenderBlock(blocks)}
          <button
            className="text-gray-c5 text-[14px] pl-[21px] pr-2 py-[5px] font-medium flex items-center gap-2"
            onClick={() => {
              const rs = cloneDeep(blocks);
              rs.push({
                id: uuidv4(),
                title: "United",
                level: 1,
                isOpen: true,
                children: [],
              });
              setBlocks(rs);
            }}
          >
            <FaPlus className="w-4 h-4" />
            Add a page
          </button>
        </div>

        <div>
          <h2>hehe</h2>
        </div>
      </div>
      <div className="" style={{ flexGrow: 1 }}>
        <BlockNotes
          item={block}
          setBlock={setBlock}
          blocks={blocks}
          setBlocks={setBlocks}
          handleEditTitle={handleEditTitle}
        />
      </div>
    </div>
  );
}
