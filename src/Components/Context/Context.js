import React, { createContext, useContext, useState } from "react";

//I create my context variable and store in my provider all the children and values I want to be sharing
//in my components

const PlanetContext = createContext();

export const PlanetContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [planetDetails, setPlanetDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [nextPage, setNextPage] = useState([]);
  const [previousPage, setPreviousPage] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);

  const value = {
    nextPage,
    setNextPage,
    previousPage,
    setPreviousPage,
    currentPage,
    setCurrentPage,
    search,
    setSearch,
    planetDetails,
    setPlanetDetails,
    loading,
    setLoading,
    showButton,
    setShowButton,
  };

  //I pass down to the provider the value and children defined above.
  return (
    <PlanetContext.Provider value={value}>{children}</PlanetContext.Provider>
  );
};

export const usePlanetContext = () => useContext(PlanetContext);
