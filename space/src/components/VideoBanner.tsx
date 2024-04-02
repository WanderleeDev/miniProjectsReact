"use client";
import React, { useRef, useState } from "react";
import { IoIosPlay } from "react-icons/io";
import { IoIosQrScanner } from "react-icons/io";

export default function VideoBanner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasFullscreen, setHasFullscreen] = useState(false);

  function playVideo() {
    if (!videoRef.current) return;

    videoRef.current.paused
      ? videoRef.current.play()
      : videoRef.current.pause();
  }

  function fullScreen() {
    setHasFullscreen((prev) => !prev);
  }

  return (
    <div
      className={`fixed inset-0 bg-[#010101] ${
        !hasFullscreen ? "u-fullscreen" : ''
      }`}
    >
      <video
        ref={videoRef}
        className="object-cover h-full w-full object-[80%] u-translate select-none"
        style={{ transform: "rotateY(180deg)" }}
        loop={true}
        muted={true}
        playsInline={true}
        src="https://prod-streaming-video-msn-com.akamaized.net/9752d732-2354-483f-a678-a6d0cd2c22b7/1a5ed13a-43f5-4e85-95c8-6579065c4d7c.mp4"
        poster="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAOEiEk.img"
      ></video>
      <div className="text-white text-2xl fixed z-10 bottom-12 right-0 flex flex-col gap-2 p-2">
        <button
          title="play video"
          onClick={playVideo}
          className="hover:bg-white/30 p-1 rounded-md"
          type="button"
        >
          <IoIosPlay />
        </button>
        <button
          onClick={fullScreen}
          type="button"
          className="hover:bg-white/30 p-1 rounded-md"
        >
          <IoIosQrScanner />
        </button>
      </div>
    </div>
  );
}
