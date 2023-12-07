import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setBooksLisDelleted,
  setBookSelected,
  updtaeBookSelected,
  addBookToLibrary,
  updateBooksFiltred,
} from "../../redux/slices";

function BookList() {
  const dispatch = useDispatch();

  const booksSelected = useSelector((state) => state.app.booksSelected);
  const bookDeleting = useSelector((state) => state.app.booksOnListDelleted);
  const filtredByGenre = useSelector((state) => state.app.bookFiltred);

  const delletBookInlist = (bookSelecToDellet) => {
    dispatch(setBooksLisDelleted(bookSelecToDellet)); //libros borrados
    const bookSelectedFilter = booksSelected.filter(
      (bookData) => bookData.book.ISBN !== bookSelecToDellet.book.ISBN
    );

    dispatch(updtaeBookSelected(bookSelectedFilter));
    dispatch(addBookToLibrary(bookSelecToDellet));
    if (filtredByGenre[0].book.genre == bookSelecToDellet.book.genre) {
      dispatch(updateBooksFiltred(bookSelecToDellet));
    }
  };

  return (
    <div className="w-[450px] h-[500px] overflow-scroll  flex flex-col bg-[#8031f8] rounded-b-lg">
      <div className="h-[10%] text-center text-3xl font-bold text-white  ">
        <h1>Books in your list</h1>
      </div>
      <div className=" m-3 rounded-lg flex flex-col  items-center shadow dark:bg-gray-800 dark:border-white-700  ">
        {booksSelected &&
          booksSelected.map((book, index) => (
            <div
              key={index}
              className="flex items-center  pl-3 m-5  w-[350px] h-[170px] justify-center bg-white rounded-md "
            >
              <div className="h-32 w- flex justify-center">
                <img
                  className="h-full w-full rounded-lg"
                  src={book.book.cover}
                  alt=""
                />
              </div>
              <div className=" w-2/3 h-[90%] p-2 ">
                <h1 className=" font-bold text-center">Title: </h1>
                <span className=" flex justify-center font-semibold text-blue-400">
                  {book.book.title}
                </span>
                <section className="flex flex-col w-full justify-center items-center h-[65%] gap-2">
                  <button className=" bg-yellow-500 w-[50%]  p-1 rounded-lg text-white font-bold">
                    Read
                  </button>
                  <button
                    onClick={() => delletBookInlist(book)}
                    className=" bg-red-600 w-[50%] rounded-lg p-1 text-white font-bold"
                  >
                    Dellete
                  </button>
                </section>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default BookList;
