import { connect } from "react-redux";
import Board from "./../components/Board";

function mapStateToProps(state) {
  return {
    squares: state.squares,
    winLine: state.result.lines
  };
}
connect(mapStateToProps)(Board);
