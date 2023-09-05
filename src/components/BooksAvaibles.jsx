import React from "react";
import { useSelector } from "react-redux";

const BooksAvaibles = () => {
  const library = useSelector((state) => state.app.library);



  return (
    <div className="flex gap-3">
      <h1 className=" font-bold text-white">
        {" "}
        {library.length > 0 && library.length}{" "}
      </h1>
      <span className=" font-semibold "> Books avaible </span>
    </div>
  );
};

export default BooksAvaibles;
