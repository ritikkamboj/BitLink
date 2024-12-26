import Image from "next/image";
import React from "react";

function page() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col justify-center items-center gap-4 text-center">
          <p className="text-2xl font-bold">The Best Url Shortner </p>
          <p className="px-56">
            The Most easiest shortner Ever Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Eos, eligendi minus unde ducimus quas
            corporis vero possimus, ea voluptate, qui ab omnis eveniet molestias
            inventore maxime aliquam iusto nulla. Asperiores.
          </p>
          <li className='flex gap-3 text-white'>
            <button className='bg-purple-500 p-3 py-1 font-bold rounded-full shadow-lg'>Try Now</button>
            <button className=' bg-purple-500 p-3 py-1 font-bold rounded-full shadow-lg'>Github</button>
          </li>
        </div>
        <div className=" flex justify-start relative">
          <Image
            alt="pic of url shortner"
            fill={true}
            src={"/url-shortner.jpg"}
          />
        </div>
      </section>
    </main>
  );
}

export default page;
