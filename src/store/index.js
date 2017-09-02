import { combineReducers, createStore } from "redux";
import Type from "union-type";
import memoize from "ramda/src/memoize";
import path from "ramda/src/path";

// MESSAGES

const Msg = Type({ INCREMENT: [], DECREMENT: [] });

const nextState = Msg.caseOn({
  INCREMENT: state => ({ count: state.count + 1 }),
  DECREMENT: state => ({ count: state.count - 1 }),
  _: state => state
});

// STATE

const initialState = {
  count: 0
};

// UPDATE

function state(state = initialState, { type = Msg.DEFAULT, payload = null }) {
  if (typeof type === "string") return state;
  return nextState(type, state);
}

// STORE

const store = createStore(
  combineReducers({
    state
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// ACTIONS

export const add = () => store.dispatch({ type: Msg.INCREMENT });
export const subtract = () => store.dispatch({ type: Msg.DECREMENT });

// SELECTORS

export const count = memoize(path(["state", "count"]));

// STORE
export default store;
