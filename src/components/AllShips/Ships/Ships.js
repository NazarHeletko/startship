import React, {useEffect} from 'react'
import style from './Ships.module.css';
import Preloader from "../../common/Preloader/Preloader";
import Paginator from "../Paginator/PaginatorContainer";
import {NavLink} from "react-router-dom";

let Ships = (props) => {
    useEffect(()=>{
        props.setShipsThunk(1);
    }, []);
    return(
        <div className={style.ships}>
            {!props.isShipsLoaded ? <Preloader/> :
            props.ships.map(ship => {
                let shipIdReverse = [];
                let shipReverse = ship.url.split('').reverse();
                let indicator = 0;
                for(let i = 0; i < shipReverse.length; i++){
                    if(shipReverse[i] ==="/"){
                        indicator = indicator+1;
                        if(indicator === 2){
                            break
                        }
                    } else {
                        shipIdReverse[i-1] = shipReverse[i]
                    }
                }
                let shipId = parseInt(shipIdReverse.reverse().join(''));
                return(
                        <div className={style['single-item-ship']}>
                            <NavLink key={shipId} className={style.link} to={`/starships/${shipId}`}>
                                <div>
                                    <h4>{ship.name}</h4>
                                    <p>{ship.model}</p>
                                </div>
                            </NavLink>
                        </div>

                )
            })}
            <Paginator/>
        </div>
    )
};

export default Ships;