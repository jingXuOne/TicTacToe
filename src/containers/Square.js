import { connect } from "react-redux";
import Square from "./../components/Square";
import { move, checkWin } from "./../redux/actions";

function mapStateToProps(state) {
  return {
    isOver: state.isOver
  };
}
function mapDispatchToProps(dispatch) {
  return {
    handleSquareClick: index => {
      dispatch(move(index));
      dispatch(checkWin());
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Square);
