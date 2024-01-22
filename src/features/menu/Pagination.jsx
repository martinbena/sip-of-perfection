import { useMenuContext } from "../../contexts/MenuContext";
import PaginationButton from "./PaginationButton";
import PaginationNumbers from "./PaginationNumbers";

function Pagination() {
  const { currentItems } = useMenuContext();

  if (currentItems.length > 0)
    return (
      <div className="mx-auto mt-20 flex max-w-sixty items-center justify-between tab:max-w-seventy moblg:max-w-full moblg:px-4">
        <PaginationButton direction="previous" />
        <PaginationNumbers />
        <PaginationButton direction="next" />
      </div>
    );
}

export default Pagination;
