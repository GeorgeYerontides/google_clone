import { useRouter } from "next/router";
import React from "react";

const SearchHeaderOption = (props) => {
  const router = useRouter();
  const selectTab = (title, path) => {
    router.push(
      `/search?term=${router.query.term}&searchType=${path }`
    );
  };
  return (
    <div
      onClick={() => selectTab(props.title, props.path)}
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 cursor-pointer pb-3 ${
        props.selected && "text-blue-500 border-blue-500"
      }`}
    >
      <props.icon className="h-4 ml-2" />
      <p>{props.title}</p>
    </div>
  );
};

export default SearchHeaderOption;
