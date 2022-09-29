import "./App.css";
import DisplayPlanet from "./Components/DisplayPlanet/DisplayPlanet";
import { PlanetContextProvider } from "./Components/Context/Context";

function App() {

  //here I import my provider. All the information in my provider, I want it available to the components
  //defined inside my provider.

  return (
    <PlanetContextProvider>
      <div className="App">
        <DisplayPlanet />
      </div>
    </PlanetContextProvider>
  );
}

export default App;
