import { connect } from "react-redux";
import Layout from "./layout.component";

const INIT_STATE = {};

export const layoutReducer = (state = INIT_STATE, action) => {
  switch (action) {
    default:
      return state;
  }
};

export default connect()(Layout);
