export function getFederalTaxSlab(grossSalary) {
    if (grossSalary <= 47630) {
        return "slab-1";
    } else if (grossSalary > 47630 && grossSalary <= 95259) {
        return "slab-2";
    } else if (grossSalary > 95259 && grossSalary <= 147667) {
        return "slab-3";
    } else if (grossSalary > 147667 && grossSalary <= 210371) {
        return "slab-4";
    } else {
        return "slab-5";
    }
}

export const federalTaxProps = {
    "slab-1": {baseAmount: 0, baseTax: 0, taxRate: 0.15},
    "slab-2": {baseAmount: 47630, baseTax: 7195, taxRate: 0.205},
    "slab-3": {baseAmount: 95259, baseTax: 16908, taxRate: 0.26},
    "slab-4": {baseAmount: 147667, baseTax: 30535, taxRate: 0.29},
    "slab-5": {baseAmount: 210371, baseTax: 48719, taxRate: 0.33}
};

export const keys = {
    GET_FEDERAL_TAX_DATA: "GET_FEDERAL_TAX_DATA",
    GET_STATE_TAX_DATA: "GET_STATE_TAX_DATA",
    HAS_ERRORED: "HAS_ERRORED"
};

export function calculateStateTax(grossSalary) {
    let stateTaxObj = {};
    let stateTax = grossSalary * 0.0505;
    stateTaxObj = {
        "5.05% on the first $43,906 of taxable income": stateTax.toFixed(2)
    };
    let remainingAmount = grossSalary - 43906;
    if (remainingAmount > 0 && remainingAmount <= 43907) {
        const taxSlab1 = remainingAmount * 0.0138;
        stateTaxObj["9.15% on the next $43,907"] = taxSlab1.toFixed(2);
        stateTax += taxSlab1;
        remainingAmount = 0;
    } else if (remainingAmount > 0 && remainingAmount > 43907) {
        const taxSlab1 = 43907 * 0.138;
        stateTax += taxSlab1;
        stateTaxObj["9.15% on the next $43,907, "] = taxSlab1.toFixed(2);
        remainingAmount = remainingAmount - 43907;
    }

    if (remainingAmount > 0 && remainingAmount <= 62187) {
        const taxSlab2 = remainingAmount * 0.1116;
        stateTax += taxSlab2;
        stateTaxObj["11.16% on the next $62,187"] = taxSlab2.toFixed(2);
        remainingAmount = 0;
    } else if (remainingAmount > 0 && remainingAmount > 62187) {
        const taxSlab2 = 62187 * 0.1116;
        stateTaxObj["11.16% on the next $62,187"] = taxSlab2.toFixed(2);
        stateTax += taxSlab2;
        remainingAmount = remainingAmount - 62187;
    }

    if (remainingAmount > 0 && remainingAmount <= 70000) {
        const taxSlab3 = remainingAmount * 0.1216;
        stateTax += taxSlab3;
        stateTaxObj["12.16% on the next $70,000"] = taxSlab3.toFixed(2);
        remainingAmount = 0;
    } else if (remainingAmount > 0 && remainingAmount > 70000) {
        const taxSlab3 = 70000 * 0.1216;
        stateTax += taxSlab3;
        stateTaxObj["12.16% on the next $70,000"] = taxSlab3.toFixed(2);
        remainingAmount = remainingAmount - 70000;
    }

    if (remainingAmount > 0) {
        const taxSlab4 = remainingAmount * 0.1316;
        stateTax += taxSlab4;
        stateTaxObj["13.16 % on the amount over $220,000"] = taxSlab4.toFixed(2);
    }

    return {
        stateTaxObj,
        stateTax: stateTax.toFixed(2)
    };
}

export const initialState = {
    federalTaxData: {
        federalTaxData: {
            baseAmount: 0,
            baseTax: 0,
            taxRate: 0
        },
        grossSalary: 0
    }
};

export const initialStateTaxState = {
    stateTax: {
        stateTaxObj: {},
        grossSalary: 0.0
    }
};

export const errorInitialState = {
    error: false,
    errorText: ""
};
