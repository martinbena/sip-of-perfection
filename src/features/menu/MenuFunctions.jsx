import { useReducer, useState } from "react";
import Pagination from "./Pagination";
import MenuItems from "./MenuItems";

function MenuFunctions({ menu }) {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const maxPages = Math.ceil(menu.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = menu.slice(startIndex, endIndex);

  return (
    <>
      <MenuItems currentItems={currentItems} />
      <Pagination
        currentPage={currentPage}
        maxPages={maxPages}
        onSetCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default MenuFunctions;
