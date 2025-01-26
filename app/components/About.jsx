import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div
      id="about"
      className="text-center container mx-auto scroll-mt-20 py-10"
    >
      <h4 className="mb-2 font-Ovo text-lg ">Introduction</h4>
      <h2 className="text-5xl font-Ovo">About me</h2>
      <div className="flex w-full  items-center flex-col lg:flex-row gap-20 my-20">
        <div className="w-64 sm:w-80">
          <Image
            className="bg-[#E5E0DD] rounded-3xl"
            alt="profile"
            width={400}
            height={500}
            src={"/profile.png"}
          />
        </div>
        <div className="flex-1">
          <p className="">
            Hi, I’m Rahul Khan Suvo, a passionate Frontend Web Developer skilled
            in HTML, CSS, JavaScript, and React.js. I build responsive,
            user-friendly websites and love solving challenges to create
            seamless experiences. I’m also familiar with backend technologies
            like Express.js and MongoDB, enabling me to create full-stack
            applications. My front-end work is enhanced by Tailwind CSS for
            efficient styling and faster development. I’m always learning and
            exploring new tools to stay updated. When I’m not coding, you can
            find me cycling, exploring new places, or capturing moments with my
            camera.
          </p>
        </div>
      </div>
    </div>
  );
}
