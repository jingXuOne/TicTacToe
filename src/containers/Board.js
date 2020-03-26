import { connect } from "react-redux";
import Board from "./../components/Board";

function mapStateToProps(state) {
  return {
    squares: state.squares,
    winLine: state.result.line
  };
}

export default connect(mapStateToProps)(Board);
