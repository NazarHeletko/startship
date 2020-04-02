import React from "react";
import style from './Preloader.module.css'
import preloaderGif from '../../../assets/preloader.gif'

let Preloader = () => {
    return(
        <div className={style.preloader}>
            <img src={preloaderGif} />
        </div>
    )
};

export default Preloader;