function Pagination({
  allPages,
  currentPage,
  onHandlePrevPage,
  onHandleNextPage,
  onHandlePageChange,
  maxPages,
}) {
  return (
    <div className="flex justify-between text-white">
      {currentPage !== 1 && (
        <button onClick={onHandlePrevPage}>Previous Page</button>
      )}
      <div>
        {allPages.map((page, i) => (
          <button key={i} onClick={() => onHandlePageChange(page)}>
            {page}
          </button>
        ))}
      </div>
      {currentPage < maxPages && (
        <button onClick={onHandleNextPage}>Next page</button>
      )}
    </div>
  );
}

export default Pagination;
