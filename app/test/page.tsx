import React from "react";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("@/components/blocknote"), { ssr: false });

type Props = {};

export default function Page({}: Props) {
  return (
    <>
      <Editor />
    </>
  );
}
