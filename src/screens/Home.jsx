import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import {
  setBookSelected,
  setBooksFiltred,
  setLibrary,
  updateLibrary,
} from "../redux/slices";
import BooksSelected from "../components/BooksSelected";
import { fetchBooks } from "../services/api";

const Home = () => {
  const dispatch = useDispatch();
  const booksSelected = useSelector((state) => state.app.booksSelected);
  const loading = useSelector((state) => state.app.loading);
  const library = useSelector((state) => state.app.library);
  const filtredByGenre = useSelector((state) => state.app.bookFiltred);
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const addBook = (selectedBook) => {
    dispatch(setBookSelected(selectedBook));
    const filteredLibrary = library.filter(
      (bookData) => bookData.book.ISBN !== selectedBook.book.ISBN
    );
    dispatch(updateLibrary(filteredLibrary));
  };
  const delleteBooksInFiltredByGenre = (selectedBook) => {
    const filteredLibrary = filtredByGenre.filter(
      (bookData) => bookData.book.ISBN !== selectedBook.book.ISBN
    );
    dispatch(setBooksFiltred(filteredLibrary));
  };

  return (
    <>
      {loading === "loading" ? (
        <div className=" h-full w-full flex justify-center mt-20">
          <h1 className=" text-5xl font-bold  text-gray-700"> Loading... </h1>
        </div>
      ) : (
        <div className=" w-1/2 m-auto mt-14">
          <div className=" grid grid-cols-5 justify-center gap-8">
            {filtredByGenre.length > 0
              ? filtredByGenre.map((bookData, index) => (
                  <div key={index}>
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
                ))
              : library.map((bookData, index) => (
                  <div key={index}>
                    <div
                      className="h-52 w-40 flex justify-center items-center cursor-pointer"
                      onClick={() => addBook(bookData)}
                    >
                      <img
                        className="h-full w-full rounded-lg hover:z-10"
                        src={bookData.book.cover}
                        alt=""
                      />
                    </div>
                  </div>
                ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
