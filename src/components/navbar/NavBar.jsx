import React from "react";
import FilterByGenre from "./FilterByGenre.jsx";
import FilterByPages from "./FilterByPages.jsx";
import BooksAvaibles from "./BooksAvaibles.jsx";
import BookList from "./BookListIIcon.jsx";
import SearchBook from "../navbar/SearchBook.jsx";
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
      <SearchBook />
      <BookList />
    </div>
  );
};

export default NavBar;
