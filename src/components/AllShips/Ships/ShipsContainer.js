import {connect} from "react-redux";
import Ships from "./Ships";
import {setShipsThunk} from "../../../redux/ships-reducer";
import {allShipsSelector, isShipsLoadedSelector} from "../../../redux/selectors";


let mapStateToProps = (state) => {
    return{
        ships: allShipsSelector(state),
        isShipsLoaded: isShipsLoadedSelector(state)
    }
};

export default connect(mapStateToProps, {setShipsThunk})(Ships)

