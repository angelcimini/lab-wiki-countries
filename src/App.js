import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import Navbar from "./components/Navbar";
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from "axios";

function App() {

  const apiURL = "https://ih-countries-api.herokuapp.com/countries"
  const [paises, setPaises] = useState([])

  useEffect(() => {
    console.log('useEffect')
    axios.get(apiURL)
    .then(resp => {
      setPaises(resp.data)
    })
  }, [])
  

  return(
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList paises={paises} />} />
        <Route path="/:countryRoute" element={<CountryDetails paises={paises} />} />
      </Routes>
    </div>
  )
}
export default App;