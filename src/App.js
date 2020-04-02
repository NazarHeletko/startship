import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import AllShipsContainer from "./components/AllShips/AllShipsContainer";
import {Provider} from "react-redux";
import store from './redux/redux-store';
import SingleShipContainer from "./components/SingleShip/SingleShipContainer";

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
          <div className="App">
            <Route exact path='/:search?' render={()=><AllShipsContainer/>} />
            <Route  path='/starships/:shipId?' render={()=><SingleShipContainer/>} />
          </div>
        </Provider>
      </BrowserRouter>
  );
}

export default App;
