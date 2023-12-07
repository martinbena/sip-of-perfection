import HeadingPrimary from "../ui/HeadingPrimary";
import { getMenu } from "../services/apiCafe";
import { useLoaderData } from "react-router-dom";
import MenuItems from "../features/menu/MenuItems";
import { useState } from "react";
import { getAvailablePages } from "../utilities/helpers";
import Pagination from "../ui/Pagination";

function Menu() {
  const menu = useLoaderData();
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const maxPages = Math.ceil(menu.length / itemsPerPage);
  const allPages = getAvailablePages(maxPages);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = menu.slice(startIndex, endIndex);

  function handlePrevPage() {
    setCurrentPage((prev) => prev - 1);
  }
  function handleNextPage() {
    setCurrentPage((prev) => prev + 1);
  }
  function handlePageChange(page) {
    setCurrentPage(page);
  }

  return (
    <section className="bg-commontext py-40 text-center">
      <HeadingPrimary>Our menu</HeadingPrimary>
      <MenuItems currentItems={currentItems} />
      <Pagination
        allPages={allPages}
        currentPage={currentPage}
        maxPages={maxPages}
        onHandlePrevPage={handlePrevPage}
        onHandleNextPage={handleNextPage}
        onHandlePageChange={handlePageChange}
      />
    </section>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
