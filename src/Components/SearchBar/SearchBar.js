import styles from "./SearchBar.module.css";
import { useEffect } from "react";
import { usePlanetContext } from "../Context/Context";

//for my SearchBar first I retrieve from my context the values needed

const SearchBar = () => {
  const { setSearch, setPlanetDetails, search } = usePlanetContext();

  //Here I make a new fetch to the swapi, but now I make it with the search parameter defined in the api
  //At first I tried to do it with query params but was not able to. So I added manually the variable where the search
  //data will be store at the end of the endpoint.
  //This fetch call is inside an useEffect that will only render when there is a search or when the data in setPlanetDetails changes.

  useEffect(() => {
    if (search !== "") {
      fetch("https://swapi.dev/api/planets/?search=" + search)
        .then((response) => response.json())
        .then((data) => {
          setPlanetDetails(data.results);
        });
    }
  }, [search, setPlanetDetails]);

  return (
    <nav>
      <div className={styles.searchContainer}>
        {/* //The preventDefault is to prevent the page to refreshing when hitting enter */}
        <form onSubmit={(e) => e.preventDefault()}>
          <label className={styles.searchLabel}>
            Search
            <input
              className={styles.searchInput}
              type="text"
              name="search"
              placeholder="Search"
              // I set my state variable to the value of the event
              onKeyDown={(e) => {
                setSearch(e.target.value);
              }}
            />
          </label>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
