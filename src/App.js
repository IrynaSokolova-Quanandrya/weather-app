import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Container from './components/Container/Container'
import AppBar from "./components/AppBar/AppBar";
import CitiesPage from "./components/pages/Cities/CitiesPage";
import HomePage from "./components/pages/HomePage/HomePage";
import CityDitailPage from "./components/pages/CityDitailPage/CityDitailPage";
import HourlyForecast from "./components/pages/HourlyForecast/HourlyForecast";

function App() {
  return (
    <Container>
      <AppBar/>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
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
