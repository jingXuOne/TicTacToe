import { connect } from "react-redux";
import { resetGame, move } from "./../actions";
import Game from "./../components/Game";

function mapStateToProps(state) {
  return {
    squares: state.squares,
    info: state.info,
    line: state.result.line
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetGame: () => dispatch(resetGame()),
    handleSquareClick: index => {
      dispatch(move(index));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
