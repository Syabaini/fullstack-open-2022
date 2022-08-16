import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
import CountryData from "./components/CountryData";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");
  const [countriesToShow, setCountriesToShow] = useState([]);

  useEffect(() => {
    fetchCountry();
  }, []);

  const fetchCountry = async () => {
    try {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      console.log(data);
      setCountries(data);
    } catch (error) {
      console.log(error, "<== Country error");
    }
  };

  const handleFilterChange = (event) => {
    const search = event.target.value;
    setNewFilter(search);
    setCountriesToShow(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <div>
      <Filter value={newFilter} onChange={handleFilterChange} />
      {countriesToShow.length === 1 ? (
        <CountryData country={countriesToShow[0]} />
      ) : null}
      {countriesToShow.length > 10 ? (
        <div>Too many matches, specify another filter</div>
      ) : (
        <Countries
          countriesToShow={countriesToShow}
          setCountriesToShow={setCountriesToShow}
        />
      )}
    </div>
  );
};

export default App;
