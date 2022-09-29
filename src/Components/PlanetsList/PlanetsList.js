import styles from "./PlanetsList.module.css";
import { useState } from "react";

//This component will define the list of items received from the swapi. Here I have determined
//how the items will show and which details i want to show on my App. These details (name, diameter, climate...) i have passed
//as props so my main component DisplayPlanet can receive them and use them.

const PlanetsList = ({ name, diameter, climate, gravity, population }) => {
  const [viewDetails, setViewDetails] = useState(false);

  return (
    // the container at first will only show the name of the Planet
    // but by clicking on it, it will display the rest of the details

    <button
      onClick={() => {
        if (!viewDetails ? setViewDetails(true) : setViewDetails(false));
      }}
      className={styles.mainContainer}
    >
      <div className={styles.planetsContainer}>
        <h1 className={styles.planetCategory}>
          Planet's Name: <br />
          <span className={styles.planetDetail}>{name}</span>
        </h1>
      </div>

      {/* ternaty operator to define when and how to show the details of the planets once the button is clicked */}

      {viewDetails && (
        <div className={styles.planetsContainer}>
          <h2 className={styles.planetCategory}>
            Diameter: <br />
            <span>{diameter}</span>
          </h2>

          <h2 className={styles.planetCategory}>
            Climate: <br /> <span>{climate}</span>
          </h2>

          <h2 className={styles.planetCategory}>
            Gravity: <br />
            <span>{gravity}</span>
          </h2>

          <h2 className={styles.planetCategory}>
            Population: <br /> <span>{population}</span>
          </h2>
        </div>
      )}
    </button>
  );
};

export default PlanetsList;
