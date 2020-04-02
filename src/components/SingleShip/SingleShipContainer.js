import {connect} from "react-redux";
import SingleShip from "./SingleShip";
import {withRouter} from "react-router-dom";
import {getSingleUserDataThunk} from "../../redux/ships-reducer";
import {singleShipDataSelector} from "../../redux/selectors";

let singleShipUrlContainer = withRouter(SingleShip);

let mapStateToProps = (state) => {
    return{
        singleShipData: singleShipDataSelector(state)
    }
};

export default connect(mapStateToProps, {getSingleUserDataThunk})(singleShipUrlContainer);