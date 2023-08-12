import React from "react";
import FilterByGenre from "./FilterByGenre";
import FilterByPages from "./FilterByPages.jsx";
import BooksAvaibles from "./BooksAvaibles";
import BookList from "./BookListIIcon";
const NavBar = () => {
  return (
    <div className="bg-[#8031f8] h-20 flex justify-center items-center gap-10">
      <div>
        <BooksAvaibles />
      </div>
      <div className="flex space-x-4">
        <FilterByGenre />
        <FilterByPages />
      </div>
      <BookList />
    </div>
  );
};

export default NavBar;
