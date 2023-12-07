import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBooksFiltred } from "../../redux/slices";

const FilterByPages = () => {
  const [number, SetNumberofPager] = useState(0);
  const dispatch = useDispatch();
  const library = useSelector((state) => state.app.library);
  const numberOfpages = library.map((book) => book.book.pages);

  console.log(number, 345227424);

  useEffect(() => {
    const filtredByGenre = library.filter((book) => book.book.pages >= number);
    console.log(filtredByGenre);
    dispatch(setBooksFiltred(filtredByGenre));
  }, [number]);

  return (
    <div className="flex gap-2 items-center justify-center">
      <h1 className=" font-extrabold">Filter by Pages</h1>
      <input
        type="range"
        min={0}
        max={Math.max(...numberOfpages)}
        onChange={(e) => SetNumberofPager(e.target.value)}
      />
      <h1 className=" font-bold">Number of pages from</h1>
      <span className=" text-white font-mono">{number}</span>
    </div>
  );
};

export default FilterByPages;
