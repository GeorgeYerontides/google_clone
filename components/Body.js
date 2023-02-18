import React, { useRef } from "react";
import Image from "next/image";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const Body = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const searchHandler = (event) => {
    event.preventDefault();
    const term = searchInputRef.current.value.trim();
    if (!term) {
      return;
    }
    router.push(`/search?term=${term}&searchType=`);
  };

  return (
    <form action="" className="flex flex-col items-center mt-40">
      <Image
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
        }
        style={{ objectFit: "cover" }}
        width={300}
        height={100}
      />
      <div className="flex w-full mx-auto max-w-[90%] mt-5 border border-gray-200 hover:shadow-lg focus-within:shadow-lg rounded-full px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 text-gray-500" />
        <input
          ref={searchInputRef}
          type="text"
          className="flex-grow focus:outline-none mx-4"
        />
        <MicrophoneIcon className="h-5 text-gray-500" />
      </div>
      <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
        <button className="btn" onClick={searchHandler}>
          Google Search
        </button>
        <button className="btn">I&apos;m feeling lucky</button>
      </div>
    </form>
  );
};

export default Body;
