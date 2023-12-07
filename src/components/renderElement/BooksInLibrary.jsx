import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBookSelected, updateLibrary } from "../../redux/slices";
import { motion, AnimatePresence } from "framer-motion";
import { VerticalAlignBottom } from "@mui/icons-material";

const BooksInLibrary = ({ bookData, index }) => {
  const dispatch = useDispatch();
  const library = useSelector((state) => state.app.library);
  const [selectedBookISBN, setSelectedBookISBN] = useState();
  const addBook = (selectedBook) => {
    dispatch(setBookSelected(selectedBook));
    const filteredLibrary = library.filter(
      (bookData) => bookData.book.ISBN !== selectedBook.book.ISBN
    );
    dispatch(updateLibrary(filteredLibrary));
    setSelectedBookISBN(selectedBook.book.ISBN);

    console.log(
      selectedBook.book.ISBN,
      "dasdashjkdasjkhdgaskhjdgjashdgashjdghjasdgashjdgasjghdfasghjd"
    );
  };
  const calculateYPosition = () => {
    const rowSize = 4; // Número de tarjetas por fila
    const rowIndex = Math.floor(index / rowSize); // Índice de la fila actual
    const yOffset = 20; // Ajuste vertical

    return rowIndex * yOffset;
  };
  if (selectedBookISBN == bookData.book.ISBN) {
    console.log(true);
  }

  return (
    <motion.div
      key={bookData.book.ISBN}
      // initial={{ opacity: 0, x: 601, scale: 0.2, y: 447 }}
      animate={{
        opacity: 1,
        x: selectedBookISBN == bookData.book.ISBN ? 900 : 0,
        scale: 1,
        y: selectedBookISBN == bookData.book.ISBN ? 900 : 0,
      }}
      // exit={{ opacity: 0, x: 601, y: 447 }}
      // transition={{ duration: 0.9 }}
      // exit={{ opacity: 0, x: 601, y: 447 }}
      transition={{ duration: 0.9 }}
      className="h-52 w-40 flex justify-center items-center cursor-pointer"
      onClick={() => addBook(bookData)}
    >
      <img
        className="h-full w-full rounded-lg hover:z-10"
        src={bookData.book.cover}
        alt="book cover"
      />
    </motion.div>
  );
};

export default BooksInLibrary;
