import SearchMenuItem from "./SearchMenuItem";
import SortMenu from "./SortMenu";

function Inputs() {
  return (
    <div className="mb-12 grid grid-cols-2 justify-items-center child:flex child:flex-col child:items-center child:gap-2 child:text-inherit tab:grid-cols-1 tab:gap-4 tab:px-4">
      <SortMenu />
      <SearchMenuItem />
    </div>
  );
}

export default Inputs;
