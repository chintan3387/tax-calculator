import {getFederalTaxData, getStateTaxData, hasErrored} from "./reducers/index";
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";
import {connectRouter} from "connected-react-router";
import {history} from "./history";

const rootReducer = combineReducers({
    federalTaxData: getFederalTaxData,
    stateTaxData: getStateTaxData,
    error: hasErrored,
    router: connectRouter(history)
});

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

export default store;
