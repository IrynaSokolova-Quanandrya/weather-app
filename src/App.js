import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Container from './components/Container/Container'
import AppBar from "./components/AppBar/AppBar";
import CitiesPage from "./components/pages/Cities/CitiesPage";
import HomePage from "./components/pages/HomePage/HomePage";
import CityDitailPage from "./components/pages/CityDitailPage/CityDitailPage";
import HourlyForecast from "./components/pages/HourlyForecast/HourlyForecast";
import axios from "axios";
const API_KEY='40207e285e43c5b8e49ba7f2599cdd4b'

// https://openweathermap.org/data/2.5/find?q=lviv&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric
function App() {
  useEffect(()=>{
   axios.get(`https://api.openweathermap.org/data/2.5/find?q=kharkiv&appid=${API_KEY}`) 
   .then(console.log)
  })
  return (
    <Container>
      <AppBar/>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* <Route path='/' element={<HomePage/>}/> */}
          <Route path='/cities' element={<CitiesPage/>}>
              {/* <Route path='/city/:cityId' element={<CityDitailPage/>}/>
              <Route path='/city/:cityId/hourly' element={<HourlyForecast/>}/> */}
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
