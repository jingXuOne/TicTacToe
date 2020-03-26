import { connect } from "react-redux";
import { resetGame } from "./../redux/actions";
import Game from "./../components/Game";

function mapStateToProps(state) {
  return {
    info: state.info
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetGame: () => dispatch(resetGame())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
