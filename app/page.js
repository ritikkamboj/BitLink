import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col justify-center items-center gap-4 text-center">
          <p className="text-2xl font-bold">The Best Url Shortner </p>
          <p className="px-56">
            A URL shortener application that not only shortens long URLs but
            also allows users to create personalized, memorable aliases for
            their links. Instead of getting a random string of characters, users
            can choose their own custom names to make links more meaningful and
            easier to share.(PS : Instead of using space in short name, please use underscore)
          </p>
          <li className="flex gap-3 text-white">
            <Link href="/shortner">
              {" "}
              <button className="bg-purple-500 p-3 py-1 font-bold rounded-full shadow-lg">
                Try Now
              </button>
            </Link>
            <Link href="/github_bitlink">
              {" "}
              <button className=" bg-purple-500 p-3 py-1 font-bold rounded-full shadow-lg">
                Github
              </button>
            </Link>
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
