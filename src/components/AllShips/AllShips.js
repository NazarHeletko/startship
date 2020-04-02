import React from "react";
import style from './AllShips.module.css';
import SearchContainer from "./Search/SearchContainer";
import ShipsContainer from "./Ships/ShipsContainer";
import turboShipGif from '../../assets/space-ship.gif';

let AllShips = (props) => {
    return(
        <div className={style['all-ships']}>
            <div className={style['title-app']}>
                <h1>Choose your starship!</h1>
                <img src={turboShipGif} />
            </div>
            <SearchContainer />
            <ShipsContainer/>

        </div>
    )
};

export default AllShips;
