import {connect} from "react-redux";
import Search from "./Search";
import {withRouter} from "react-router-dom";
import React, {useEffect} from "react";
import {copyMainDataShipstAC, filterItemsByNamestAC, setSearchTextAC} from "../../../redux/ships-reducer";

let WrapperSearchContainer = (props) => {
    useEffect(()=>{
        props.setSearchTextAC(props.match.params.search || '');
    }, []);
    let searchDataInUrl = (text) => {
        props.history.push(`/${text}`);
    };
    return (
        <Search copyMainDataShipstAC={props.copyMainDataShipstAC} setSearchTextAC={props.setSearchTextAC}
                textValue={props.match.params.search}
                searchDataInUrl={searchDataInUrl} filterItemsByNamestAC={props.filterItemsByNamestAC}/>
    )
};

let SearchUrl = withRouter(WrapperSearchContainer);


let mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, {setSearchTextAC, filterItemsByNamestAC, copyMainDataShipstAC})(SearchUrl)