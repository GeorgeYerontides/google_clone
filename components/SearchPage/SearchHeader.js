import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MicrophoneIcon,SearchIcon, XIcon } from "@heroicons/react/solid";
import User from "../User";
import SearchHeaderOptions from "./SearchHeaderOptions";
const SearchHeader = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);
  
  const searchHandler = (event) => {
    event.preventDefault();
    const term = searchInputRef.current.value.trim();
    if (!term) {
      return;
    }
    router.push(`/search?term=${term}&searchType`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => {
            router.push("/");
          }}
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          }
          style={{ objectFit: "contain" }}
          width={120}
          height={40}
          className="cursor-pointer"
        />
         <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
          <input type="text" ref={searchInputRef} defaultValue={router.query.term}  className='w-full focus:outline-none'/>
          <XIcon className="h-7 text-gray-500 cursor-pointer sm:mr-2" onClick={()=> searchInputRef.current.value =''}/>
          <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3"/>
          <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500"  onClick={searchHandler} />
          <button type='submit' onClick={searchHandler} hidden></button>
        </form>
        <User className='ml-auto whitespace-nowrap'/>

      </div>
       <SearchHeaderOptions/>
    </header>
  );
};

export default SearchHeader;
