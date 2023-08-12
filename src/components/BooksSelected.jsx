import React from "react";
import { useSelector } from "react-redux";

const BooksSelected = () => {
  const booksSelected = useSelector((state) => state.app.booksSelected);

  return (
    <div className=" w-[300px] overflow-hidden h-[800px]  bg-black ">
      {booksSelected.map((bookDataSelected) => (
        <div className="h-52 w-30 flex justify-center items-center m-10 ">
          <img
            className=" h-60 rounded-lg "
            src={bookDataSelected.book.cover}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default BooksSelected;
