import { getAvailablePages } from "../../utilities/helpers";

function Pagination({ currentPage, maxPages, onSetCurrentPage }) {
  const allPages = getAvailablePages(maxPages);
  function handlePrevPage() {
    onSetCurrentPage((prev) => prev - 1);
  }
  function handleNextPage() {
    onSetCurrentPage((prev) => prev + 1);
  }
  function handlePageChange(page) {
    onSetCurrentPage(page);
  }
  return (
    <div className="flex justify-between text-white">
      {currentPage !== 1 && (
        <button onClick={handlePrevPage}>Previous Page</button>
      )}
      <div>
        {allPages.map((page, i) => (
          <button key={i} onClick={() => handlePageChange(page)}>
            {page}
          </button>
        ))}
      </div>
      {currentPage < maxPages && (
        <button onClick={handleNextPage}>Next page</button>
      )}
    </div>
  );
}

export default Pagination;
