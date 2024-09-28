"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Spotlight } from "./ui/Spotlight";
import { CgTrack } from "react-icons/cg";
import { LuImage } from "react-icons/lu";

export function Hero() {
  const router = useRouter();

  const handleTrackClick = () => {
    router.push("/track");
  };

  const handleUploadClick = () => {
    router.push("/upload");
  };

  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex-1">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Your Events, Your Story, Shared Your Way.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Snap Share lets you take control of your memories. Create event collections, share with loved ones, and choose who sees them and track them. Whether public or private, it is your story, shared your way.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <button
            className="shadow-[inset_0_0_0_2px_#616467] text-white px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-black dark:text-neutral-200 transition duration-200 flex items-center"
            onClick={handleTrackClick}
          >
            Track <CgTrack className="ml-2" />
          </button>
          <button
            className="shadow-[inset_0_0_0_2px_#616467] bg-white text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-gray-300 hover:text-black dark:text-neutral-200 transition duration-200 flex items-center"
            onClick={handleUploadClick}
          >
            Upload <LuImage className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
