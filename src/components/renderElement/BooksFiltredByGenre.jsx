import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setBookSelected,
  updateLibrary,
  setBooksFiltred,
} from "../../redux/slices";

const BooksFiltredByGenre = ({ bookData }) => {
  const dispatch = useDispatch();
  const library = useSelector((state) => state.app.library);
  const libraryFiltred = useSelector((state) => state.app.bookFiltred);

  console.log(libraryFiltred, "reduixuiuxuxuxuxuxuxuxu");

  const addBook = (selectedBook) => {
    dispatch(setBookSelected(selectedBook));
    const filteredLibrary = library.filter(
      (bookData) => bookData.book.ISBN !== selectedBook.book.ISBN
    );
    dispatch(updateLibrary(filteredLibrary));
  };
  const delleteBooksInFiltredByGenre = (selectedBook) => {
    const filteredLibrary = libraryFiltred.filter(
      (bookData) => bookData.book.ISBN !== selectedBook.book.ISBN
    );

    console.log(filteredLibrary, "mama guebooooooooooooooo");
    dispatch(setBooksFiltred(filteredLibrary));
  };

  return (
    <div key={Number(bookData.ISBN)}>
      <div
        className="h-52 w-40 flex justify-center items-center cursor-pointer"
        onClick={() => {
          addBook(bookData);
          delleteBooksInFiltredByGenre(bookData);
        }}
      >
        <img
          className="h-full w-full rounded-lg hover:z-10"
          src={bookData.book.cover}
          alt=""
        />
      </div>
    </div>
  );
};

export default BooksFiltredByGenre;
