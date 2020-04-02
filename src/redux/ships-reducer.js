import {ships} from "../api/api";

const SET_SHIPS = 'SET_SHIPS';
const IS_SHIPS_LOADED = 'IS_SHIPS_LOADED';
const CHANGE_ACTIVE_PAGE = 'CHANGE_ACTIVE_PAGE';
const BTN_DISABLED = 'BTN_DISABLED';
const GET_SINGLE_SHIP = 'GET_SINGLE_SHIP';
const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
const COPY_MAIN_DATA_SHIPS = 'COPY_MAIN_DATA_SHIPS';
const FILTER_ITEMS_BY_NAMES = 'FILTER_ITEMS_BY_NAMES';

let initialState = {
    loadShips: false,
    paginatorDisabledBtn: false,
    totalShips: 0,
    activePage: 1,
    shipsData: [],
    filteredShipsData: [],
    singleShipData: null,
    searchText: ''
};

const shipsReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_SHIPS:
            return{
                ...state,
                shipsData: action.ships,
                totalShips: action.totalShips
            };
        case FILTER_ITEMS_BY_NAMES:
            return{
                ...state,
                filteredShipsData: state.filteredShipsData.filter((item)=>{
                    return item.name.toLowerCase().indexOf(action.text.toLowerCase()) != -1;
                })
            };
        case COPY_MAIN_DATA_SHIPS:
            return{
                ...state,
                filteredShipsData: [...state.shipsData]
            };
        case SET_SEARCH_TEXT:
            return{
                ...state,
                searchText: action.searchText
            };
        case GET_SINGLE_SHIP:
            return{
                ...state,
                singleShipData: action.singleShipData
            };
        case CHANGE_ACTIVE_PAGE:
            return{
                ...state,
                activePage: action.activePage
            };
        case IS_SHIPS_LOADED:
            return{
                ...state,
                loadShips: action.isLoaded
            };
        case BTN_DISABLED:
            return{
                ...state,
                paginatorDisabledBtn: action.isDisabled
            };
        default:
            return state;
    }
};

export const filterItemsByNamestAC = (text) => {
    return{
        type: FILTER_ITEMS_BY_NAMES,
        text
    }
};

export const copyMainDataShipstAC = () => {
    return{
        type: COPY_MAIN_DATA_SHIPS
    }
};

export const setSearchTextAC = (searchText) => {
    return{
        type: SET_SEARCH_TEXT,
        searchText
    }
};

const getSingleUserAC = (singleShipData) => {
    return{
        type: GET_SINGLE_SHIP,
        singleShipData
    }
};

export const getSingleUserDataThunk = (id) =>  (dispatch) => {
            dispatch(getSingleUserAC(null));
        return ships.getSingleShipData(id).then(response =>{
                dispatch(getSingleUserAC(response.data));
            }
    );
};


export const changeActivePageAC = (activePage) => {
    return{
        type: CHANGE_ACTIVE_PAGE,
        activePage
    }
};


export const btnDisabledAC = (isDisabled) => {
    return{
        type: BTN_DISABLED,
        isDisabled
    }
};

const setShipsAC = (ships, totalShips) => {
    return{
        type: SET_SHIPS,
        ships,
        totalShips
    }
};

const setShipsLoadedAC = (isLoaded) => {
    return{
        type: IS_SHIPS_LOADED,
        isLoaded
    }
};

export const setShipsThunk = (page) =>  (dispatch, getState) => {
    const searchText = getState().ships.searchText;
    console.log(searchText);
    dispatch(setShipsLoadedAC(false));
    dispatch(btnDisabledAC(true));
    return ships.getShips(page).then(response =>{
        dispatch(setShipsAC(response.data.results, response.data.count));
                dispatch(copyMainDataShipstAC());
                dispatch(setShipsLoadedAC(true));
                dispatch(btnDisabledAC(false));
                dispatch(filterItemsByNamestAC(searchText));
        }
    );
};


export default shipsReducer;