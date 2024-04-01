import React from "react";

export default function VideoBanner() {
  return (
    <video
      className="fixed -z-10 inset-0 object-cover h-full w-full object-[80%] lg:u-translate"
      style={{ transform: "rotateY(180deg)" }}
      loop={true}
      muted={true}
      playsInline={true}
      autoPlay
      src="https://prod-streaming-video-msn-com.akamaized.net/9752d732-2354-483f-a678-a6d0cd2c22b7/1a5ed13a-43f5-4e85-95c8-6579065c4d7c.mp4"
      poster="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAOEiEk.img"
    ></video>
  );
}
