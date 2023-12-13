import SearchMenuItem from "./SearchMenuItem";
import SortMenu from "./SortMenu";

function Inputs() {
  return (
    <div className="mb-12 grid grid-cols-2 justify-items-center child:flex child:flex-col child:items-center child:gap-2 child:text-inherit">
      <SortMenu />
      <SearchMenuItem />
    </div>
  );
}

export default Inputs;
