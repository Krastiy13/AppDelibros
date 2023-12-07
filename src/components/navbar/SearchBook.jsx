import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBooksFiltred } from "../../redux/slices";

const SearchBook = () => {
  const [searchBook, SetSearchBook] = useState();
  const dispatch = useDispatch();
  const library = useSelector((state) => state.app.library);

  useEffect(() => {
    const filtredByGenre = library.filter((book) =>
      book.book.title.toLowerCase().includes(searchBook.toLowerCase())
    );
    console.log(filtredByGenre, "filtrado");
    dispatch(setBooksFiltred(filtredByGenre));
  }, [searchBook]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search book available"
        onChange={(e) => SetSearchBook(e.target.value)}
      />
    </div>
  );
};

export default SearchBook;
