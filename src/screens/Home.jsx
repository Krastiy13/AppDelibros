import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import BooksSelected from "../components/navbar/BooksSelected";
import { fetchBooks } from "../services/api";
import BooksFiltredByGenre from "../components/renderElement/BooksFiltredByGenre";
import BooksInLibrary from "../components/renderElement/BooksInLibrary";
import CardShows from "../components/CardShows";

const Home = () => {
  const dispatch = useDispatch();
  const booksSelected = useSelector((state) => state.app.booksSelected);
  const loading = useSelector((state) => state.app.loading);

  const library = useSelector((state) => state.app.library);
  const bookFiltred = useSelector((state) => state.app.bookFiltred);
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });
  // console.log(pointerPosition, "la posición");
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setPointerPosition({ x: clientX, y: clientY });
  };
  return (
    <div
    //  onMouseMove={handleMouseMove}
    >
      <CardShows />
      {loading === "loading" ? (
        <div className=" h-full w-full flex justify-center mt-14">
          <h1 className=" text-5xl font-bold  text-gray-700"> Loading... </h1>
        </div>
      ) : (
        <div className=" w-1/2 m-auto mt-14">
          <div className=" grid grid-cols-5 justify-center gap-8">
            {bookFiltred.length > 0
              ? bookFiltred.map((bookData, index) => (
                  <BooksFiltredByGenre bookData={bookData} index={index} />
                ))
              : library.map((bookData, index) => (
                  <div key={index}>
                    <BooksInLibrary index={index} bookData={bookData} />
                  </div>
                ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
