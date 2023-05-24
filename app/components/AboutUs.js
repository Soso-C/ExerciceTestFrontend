import React from "react";
import { GiClover } from "react-icons/gi/index";
export default function AboutUs() {
  return (
    <section className="max-7xl mx-auto w-full bg-white h-full">
      <div className="py-12">
        <h1 className="text-center text-4xl text-zinc-950 font-semibold">
          Qui sommes-nous ?
        </h1>
        <div className="flex items-center justify-center pt-12">
          <GiClover className="w-32 h-32 text-black" />
        </div>
        <h2 className="text-center text-3xl text-black tracking-widest">
          L'effet papillon
        </h2>
      </div>
    </section>
  );
}
