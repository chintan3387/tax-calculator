import {
    keys,
    getFederalTaxSlab,
    federalTaxProps,
    initialState,
    initialStateTaxState,
    errorInitialState
} from "../utilities/helper";

export const getFederalTaxData = (state = initialState, action) => {
    switch (action.type) {
        case keys.GET_FEDERAL_TAX_DATA:
            const taxSlab = getFederalTaxSlab(action.payload);
            const federalTaxData = federalTaxProps[taxSlab];
            return {
                federalTaxData,
                grossSalary: parseInt(action.payload)
            };
        default:
            return state;
    }
};

export const getStateTaxData = (state = initialStateTaxState, action) => {
    switch (action.type) {
        case keys.GET_STATE_TAX_DATA:
            return {
                stateTax: action.payload.stateTax,
                grossSalary: parseInt(action.payload.grossSalary)
            };
        default:
            return state;
    }
};

export const hasErrored = (state = errorInitialState, action) => {
    switch (action.type) {
        case keys.HAS_ERRORED:
            return action.payload;
        default:
            return state;
    }
};
