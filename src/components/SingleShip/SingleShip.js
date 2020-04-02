import React, {useEffect} from "react";
import style from './SingleShip.module.css';
import Preloader from "../common/Preloader/Preloader";
import homeIcon from '../../assets/house.png';
import {NavLink} from "react-router-dom";

let SingleShip = (props) => {
    let shipId = props.match.params.shipId;
    useEffect(()=> {
        props.getSingleUserDataThunk(shipId);
    }, []);
    let shipData = props.singleShipData;
    return(
        <div className={style['single-ship']}>
            <div className={style.home}><NavLink to='/'><img src={homeIcon} /></NavLink></div>
            <h1>All you need to know about the ship</h1>
            {
                shipData ?
            <div className={style['ship-info']}>
                <p><span>MGLT</span><br/>{shipData.MGLT}</p>
                <p><span>cargo capacity</span><br/>{shipData.cargo_capacity}</p>
                <p><span>consumables</span><br/>{shipData.consumables}</p>
                <p><span>cost in credits</span><br/>{shipData.cost_in_credits}</p>
                <p><span>created</span><br/>{shipData.created}</p>
                <p><span>crew</span><br/>{shipData.crew}</p>
                <p><span>edited</span><br/>{shipData.edited}</p>
                <p><span>hyperdrive rating</span><br/>{shipData.hyperdrive_rating}</p>
                <p><span>length</span><br/>{shipData.length}</p>
                <p><span>manufacturer</span><br/>{shipData.manufacturer}</p>
                <p><span>max atmosphering speed</span><br/>{shipData.max_atmosphering_speed}</p>
                <p><span>model</span><br/>{shipData.model}</p>
                <p><span>name</span><br/>{shipData.name}</p>
                <p><span>passengers</span><br/>{shipData.passengers}</p>
                <p><span>films</span><br/>{shipData.films.map((el)=>el)}</p>
                <p><span>pilots</span><br/>{shipData.pilots}</p>
                <p><span>starship class</span><br/>{shipData.starship_class}</p>
                <p><span>url</span><br/>{shipData.url}</p>
            </div> : <Preloader/>}
        </div>
    )
};

export default SingleShip;