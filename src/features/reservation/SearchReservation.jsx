import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "../../ui/Searchbar";

function SearchReservation() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/reservation/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Searchbar
        placeholder="Search reservation number"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchReservation;
