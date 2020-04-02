export const allShipsSelector = (state) => {
    return state.ships.filteredShipsData;
};
export const isShipsLoadedSelector = (state) => {
    return state.ships.loadShips;
};
export const totalShipsSelector = (state) => {
    return state.ships.totalShips;
};
export const activePageSelector = (state) => {
    return state.ships.activePage;
};
export const paginatorDisabledBtnSelector = (state) => {
    return state.ships.paginatorDisabledBtn;
};
export const singleShipDataSelector = (state) => {
    return state.ships.singleShipData;
};
