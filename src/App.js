import { React } from "react";
import './App.css';
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/Navbar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import {netflixOrginals , actionSeries ,comedySeries,horrorSeries, romanticSeries ,docSeries} from './urls';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner />
      <RowPost title='Netflix Orginals' source={netflixOrginals}/>
      <RowPost title='Action' isSmall  source={actionSeries}/>
      <RowPost title='Comedy' isSmall  source={comedySeries}/>
      <RowPost title='Horror' isSmall  source={horrorSeries}/>
      <RowPost title='Romantic' isSmall  source={romanticSeries}/>
      <RowPost title='Documentary' isSmall  source={docSeries}/>
      
    </div>
  );
}

export default App;
