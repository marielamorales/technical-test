import styles from "./DisplayPlanet.module.css";
import PlanetsList from "../PlanetsList/PlanetsList";
import { usePlanetContext } from "../Context/Context";
import SearchBar from "../SearchBar/SearchBar";

//import my context so i can use all the values in this component. This is the main component where all the data will come together.
const DisplayPlanet = () => {
  const {
    planetDetails,
    setPlanetDetails,
    loading,
    setLoading,
    showButton,
    setShowButton,
    search,
    setSearch,
    nextPage,
    setNextPage,
    previousPage,
    setPreviousPage,
    currentPage,
    setCurrentPage,
  } = usePlanetContext();

  //I created a function to fetch the data required to the api and once the data is received is being stored
  //in a variable so we can continue using these data. In this case the endpoint to which I required the data is PLANETS.

  const fetchResource = async () => {
    const response = await fetch("https://swapi.dev/api/planets"); //here we receive the data, but it is still not in an usable format.
    const planetsData = await response.json(); //Therefore we take that data and convert it into json format and store it in a new variable.
    setPlanetDetails(planetsData.results); //to get the array information I need for my app, i need to first access the results, and inside these results i will find the details I need
    setLoading(false); //both of these state variables are to condition
    setShowButton(false); //when I want something to be showing
  };

  {
    /* //This was part of one of my attempts to paginate in the app, which I'll leave commented so you can
         see a bit of my thoughts on this. I do receive the Next and Previous data in my console. But since
         it is url from the api I wasnt able to redirect the buttons to show the content of those pages*/
  }

  // const handleNextPage = async () => {
  //   const response = await fetch("https://swapi.dev/api/planets/?page=");
  //   const planetsData = await response.json();
  //   setPlanetDetails(planetsData.results);
  //   setNextPage(planetsData.next);
  //   console.log("NEXTpage:", planetsData.next);
  // };

  return (
    // In this component I define the structure I want my app to have, and I also import all the other components I want to render
    <div className={styles.mainContainer}>
      <SearchBar search={search} setSearch={setSearch} />
      <a href="http://localhost:3000" className={styles.title}>
        PLANET FINDER
      </a>

      {/* ternaty operator to define when to show the view all button. When clicking this button the call to execute 
      my fetch function will made */}

      {showButton ? (
        <button
          className={styles.displayBtn}
          onClick={() => {
            fetchResource();
            setLoading(true);
          }}
          type="button"
        >
          <p className={styles.contentButton}>View all</p>
        </button>
      ) : (
        <></>
      )}

      {/* ternaty operator to define when to show the loading sign. This is the main step in having the data 
 displayed on the screen. With the array of data retrieved in my fetch function i use the MAP method for every element received. So for
 every element (or in this case planet) received the information will render as defined in my PlanetList component  */}

      <section className={styles.planetSection}>
        {!loading ? (
          planetDetails.map((planet) => (
            <PlanetsList
              name={planet.name}
              diameter={planet.diameter}
              climate={planet.climate}
              gravity={planet.gravity}
              population={planet.population}
            />
          ))
        ) : (
          <span className={styles.loading}>Loading in process...</span>
        )}

        {/* //This was part of on of my attempts to paginate in the app, which I'll leave commented so you can
         see a bit of my thoughts on this*/}

        {/* {!loading && (
          <div>
            <button
              className={styles.pagesBtn}
              type="button"
              onClick={() => setPreviousPage(previousPage)}
            >
              <p className={styles.contentButton}>Previous</p>
            </button>
            <button
              className={styles.pagesBtn}
              type="button"
              onClick={() => {
                handleNextPage();
                console.log("nextPage", nextPage);
              }}
            >
              <p className={styles.contentButton}>Next</p>
            </button>
          </div>
        )} */}
      </section>
    </div>
  );
};

export default DisplayPlanet;
