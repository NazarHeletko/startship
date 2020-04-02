import React from "react";
import style from './Paginator.module.css';



let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalShips/10);
    let pagesArr = [];
    for(let i = 1; i <= pagesCount; i++){
        pagesArr[i-1] = i
    }
    return(
        <div className={style.paginator}>
            <button onClick={()=>{
                if(props.activePage > 1){
                    props.copyMainDataShipstAC();
                    props.changeActivePageAC(props.activePage-1);
                    props.setSearchTextAC('');
                    props.setShipsThunk(props.activePage-1);
                    props.searchDataInUrl('');
                }
            }} disabled={props.activePage < 2 || props.paginatorDisabledBtn ? true : false}>prew</button>
            <span>{props.activePage}</span>
            <button disabled={props.activePage === pagesArr.length || props.paginatorDisabledBtn ? true : false} onClick={()=>{
                if(props.activePage < pagesArr.length){
                    props.copyMainDataShipstAC();
                    props.changeActivePageAC(props.activePage+1);
                    props.setSearchTextAC('');
                    props.setShipsThunk(props.activePage+1);
                    props.searchDataInUrl('');

                }
            }}>next</button>
        </div>
    )
};

export default Paginator;