import PaginationButton from "./PaginationButton";
import PaginationNumbers from "./PaginationNumbers";

function Pagination() {
  return (
    <div className="mx-auto mt-20 flex max-w-sixty items-center justify-between">
      <PaginationButton direction="previous" />
      <PaginationNumbers />
      <PaginationButton direction="next" />
    </div>
  );
}

export default Pagination;
