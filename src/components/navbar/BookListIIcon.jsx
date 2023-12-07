import React, { useState } from "react";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { useSelector } from "react-redux";
import BookList from "./BookList";

const BookListIcon = () => {
  const booksSelected = useSelector((state) => state.app.booksSelected);
  const [showList, setShowList] = useState(false);

  return (
    <div>
      <div className="flex relative">
        {booksSelected.length > 0 && (
          <span className=" absolute bottom-5 left-6 bg-red-600 h-7 w-7 flex justify-center rounded-full text-white font-bold ">
            {booksSelected.length}
          </span>
        )}
        <LibraryBooksIcon
          onClick={() => setShowList(!showList)}
          style={{ fontSize: 35, color: "white" }}
        />
        {showList ? (
          <div className="absolute top-14">
            <BookList />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BookListIcon;
