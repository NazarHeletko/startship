import React from 'react';
import style from './Search.module.css';

let Search = (props) => {

    let textV = props.textValue || '';
    return(
        <div className={style.search}>
            <input onChange={(e)=>{
                props.copyMainDataShipstAC();
                let TextValue = e.target.value;
                props.searchDataInUrl(TextValue);
                props.setSearchTextAC(TextValue);
                props.filterItemsByNamestAC(TextValue);
            }} value={textV} placeholder='find your favorite ship' type='text'/>
        </div>
    )
};

export default Search;