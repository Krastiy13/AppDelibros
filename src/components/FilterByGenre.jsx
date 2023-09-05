import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBooksFiltred, updateLibrary } from "../redux/slices";
const FilterByGenre = () => {
  const library = useSelector((state) => state.app.library);
  const [genresSelected, setGenresSelected] = useState("");
  const dispatch = useDispatch();

  //sacar generos por si hay repetidos
  const genres = library.reduce((genres, book) => {
    if (!genres.includes(book.book.genre)) {
      genres.push(book.book.genre);
    }
    return genres;
  }, []);

  useEffect(() => {
    const filtredByGenre = library.filter(
      (book) => book.book.genre == genresSelected
    );

    dispatch(setBooksFiltred(filtredByGenre));
  }, [genresSelected]);

  return (
    <div className="flex gap-4">
      <h1 className="font-extrabold">Filter by Genres</h1>
      <select
        value={genresSelected}
        onChange={(e) => setGenresSelected(e.target.value)}
        className="w-[200px] flex flex-col "
      >
        <option value="">Select genre</option>
        {genres &&
          genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
      </select>
    </div>
  );
};

export default FilterByGenre;

// <option disabled value={book.book.genre}>
//           {book.book.genre}
//         </option>
