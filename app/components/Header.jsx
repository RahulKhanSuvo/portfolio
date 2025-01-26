import React from "react";

export default function Header() {
  return (
    <header className="text-center w-11/12 mx-auto flex flex-col justify-center items-center gap-6 h-[60vh]">
      <h3 className="font-Ovo text-lg sm:text-xl text-gray-700">
        Hi! My name is 👋
      </h3>
      <h1 className="font-Ovo text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900">
        Rahul Khan
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mt-2 max-w-lg">
        I’m a passionate Frontend Web Developer specializing in creating
        beautiful and functional web experiences using React, JavaScript, and
        modern tools. Let’s build something amazing together!
      </p>
      <div className="space-x-4 mt-6">
        <button className="px-10 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300">
          Contact Me
        </button>
        <button className="px-10 py-3 border border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition duration-300">
          View Portfolio
        </button>
      </div>
    </header>
  );
}
