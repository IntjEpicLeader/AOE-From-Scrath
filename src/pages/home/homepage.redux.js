import { connect } from "react-redux";
import HomePage from "./homepage.component";

const INIT_STATE = {};

export const homepageReducer = (state = INIT_STATE, action) => {
  switch (action) {
    default:
      return state;
  }
};

export default connect()(HomePage);
