import React from "react";

export default function Header() {
  return (
    <div className="text-center w-11/12 mx-auto flex-col flex justify-center gap-4 h-[60vh]">
      <h3 className="font-Ovo">Hi! my name</h3>
      <h1 className="font-Ovo text-3xl sm:text-6xl lg:text-7xl">Rahul KHa</h1>
      <div className="space-x-3 mt-4">
        <button className="px-10 py-3 border-white text-white rounded-full bg-black">
          contact me
        </button>
        <button className="px-10 py-3 border text-black rounded-full ">
          contact me
        </button>
      </div>
    </div>
  );
}
