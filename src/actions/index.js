import {keys, calculateStateTax} from "../utilities/helper";

export const getFederalTaxData = grossSalary => {
    return {
        type: keys.GET_FEDERAL_TAX_DATA,
        payload: grossSalary
    };
};

export const getStateTaxData = grossSalary => {
    return {
        type: keys.GET_STATE_TAX_DATA,
        payload: {
            stateTax: calculateStateTax(grossSalary),
            grossSalary
        }
    };
};

export const hasErrored = errorText => {
    return {
        type: keys.HAS_ERRORED,
        payload: {
            error: true,
            errorText
        }
    };
};
