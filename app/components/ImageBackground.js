import React from "react";
import Image from "next/image";
export default function ImageBackground() {
  return (
    <div className="w-full h-[600px] overflow-hidden object-top">
      <Image
        src={"/bed.jpg"}
        alt="Picture of the author"
        width={"1920"}
        height={"300"}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
