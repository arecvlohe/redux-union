import React from "react";
import { add, subtract, count } from "./store";
import { connect } from "react-redux";

const mapStateToProps = state => ({ count: count(state) });

export default connect(mapStateToProps)(({ count }) => {
  return (
    <div className="App">
      <button type="button" onClick={add}>
        ADD
      </button>
      <button type="button" onClick={subtract}>
        SUBTRACT
      </button>
      {count}
    </div>
  );
});
