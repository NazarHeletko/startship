import Paginator from "./Paginator";
import {connect} from "react-redux";
import {activePageSelector, paginatorDisabledBtnSelector, totalShipsSelector} from "../../../redux/selectors";
import {changeActivePageAC, copyMainDataShipstAC, setSearchTextAC, setShipsThunk} from "../../../redux/ships-reducer";
import {withRouter} from "react-router-dom";
import React from "react";

let WrapperPaginator = (props) => {
    let searchDataInUrl = (text) => {
        props.history.push(`/${text}`);
    };
    return(
        <Paginator searchDataInUrl={searchDataInUrl} {...props} />
    )
};

let PaginatorUrl = withRouter(WrapperPaginator);

let mapStateToProps = (state) => {
    return{
        totalShips: totalShipsSelector(state),
        activePage: activePageSelector(state),
        paginatorDisabledBtn: paginatorDisabledBtnSelector(state)
    }
};

export default connect(mapStateToProps, {changeActivePageAC, setShipsThunk,copyMainDataShipstAC, setSearchTextAC})(PaginatorUrl)