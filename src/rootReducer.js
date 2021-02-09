import { combineReducers } from "redux";

import { layoutReducer } from "./pages/layout/layout.redux";
import { homepageReducer } from "./pages/home/homepage.redux";

export const rootReducer = combineReducers({ layoutReducer, homepageReducer });
