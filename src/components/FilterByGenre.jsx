import React from "react";
import { useSelector } from "react-redux";

const FilterByGenre = () => {
  const library = useSelector((state) => state.app.library);

  const genres = library.reduce((genres, book) => {
    if (!genres.includes(book.book.genre)) {
      genres.push(book.book.genre);
    }
    return genres;
  }, []);

  return (
    <div className="flex gap-4">
      <h1 className="font-extrabold">Filter by Genres</h1>
      <select name="" id="" className="w-[200px] flex flex-col ">
        <option selected disabled value="">
          Select genre
        </option>

        {genres &&
          genres.map((genre) => <option value={genre}>{genre}</option>)}
      </select>
    </div>
  );
};

export default FilterByGenre;

// <option disabled value={book.book.genre}>
//           {book.book.genre}
//         </option>
