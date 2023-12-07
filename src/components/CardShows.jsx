import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addBookToLibrary,
  setBooksLisDelleted,
  updateBooksFiltred,
  updtaeBookSelected,
} from "../redux/slices";
import { motion } from "framer-motion";

const CardShows = () => {
  const booksSelected = useSelector((state) => state.app.booksSelected);
  const filtredByGenre = useSelector((state) => state.app.bookFiltred);
  const dispatch = useDispatch();
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [isRemoving, setIsRemoving] = useState(false);

  const delletBookInlist = async (bookSelecToDellet) => {
    dispatch(setBooksLisDelleted(bookSelecToDellet)); //libros borrados
    const bookSelectedFilter = booksSelected.filter(
      (bookData) => bookData.book.ISBN !== bookSelecToDellet.book.ISBN
    );
    dispatch(updtaeBookSelected(bookSelectedFilter));
    dispatch(addBookToLibrary(bookSelecToDellet));
    if (filtredByGenre[0].book.genre === bookSelecToDellet.book.genre) {
      dispatch(updateBooksFiltred(bookSelecToDellet));
    }
  };

  return (
    <div className="absolute right-10 bg-slate-400 w-[400px] h-4/5 rounded-lg shadow-xl overflow-hidden z-50 overflow-scroll">
      <div style={{ display: "flex", justifyContent: "center" }}>
        {booksSelected.map((book, i) => {
          console.log(book.book.ISBN === selectedBookId);
          return (
            <motion.div
              key={book.book.ISBN}
              initial={{ x: 0 }}
              animate={
                selectedBookId && book.book.ISBN === selectedBookId
                  ? { x: "-200%" }
                  : { x: 0 }
              }
              transition={{ type: "tween", duration: 0.5 }}
              style={{
                marginTop: "30px",
                position: "absolute",
                top: i * 70,
              }}
              className="shadow-lg shadow-black"
            >
              <img
                style={{ width: 240 + i * 10 + "px" }}
                className="h-[400px] rounded-xl"
                src={book.book.cover}
                alt=""
              />
              <button
                onClick={() => {
                  setSelectedBookId(book.book.ISBN);
                  setIsRemoving(true);
                  // Agrega un pequeño retardo antes de realizar la eliminación para dar tiempo a la animación
                  setTimeout(() => {
                    setIsRemoving(false);
                    delletBookInlist(book);
                  }, 500); // 500 milisegundos, ajusta según sea necesario
                }}
                className="absolute top-4 right-4 w-8 h-8 bg-white rounded-2xl justify-center items-center text-black font-bold"
              >
                X
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CardShows;
