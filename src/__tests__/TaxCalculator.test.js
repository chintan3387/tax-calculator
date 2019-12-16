import React from "react";
import Adapater from "enzyme-adapter-react-16";
import Enzyme, {mount} from "enzyme";
import configureStore from "redux-mock-store";
import TaxCalculator from "../components/TaxCalculator";

Enzyme.configure({adapter: new Adapater()});

describe(" TaxCalculator Component", () => {
    const initialState = {
        federalTaxData: {
            federalTaxData: {
                baseAmount: 47630,
                baseTax: 7195,
                taxRate: 0.205
            },
            grossSalary: 90000
        },
        stateTaxData: {
            stateTax: {
                stateTaxObj: {
                    "5.05% on the first $43,906 of taxable income": "4545.00",
                    "9.15% on the next $43,907, ": "6059.17",
                    "11.16% on the next $62,187": "244.07"
                },
                stateTax: "10848.24"
            },
            grossSalary: 90000
        }
    };

    const mockStore = configureStore();
    let store;
    let wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        store.dispatch = jest.fn();
        wrapper = mount(<TaxCalculator store={store} />);
    });

    it("renders", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("render table component", () => {
        const table = wrapper.find("table");
        expect(table.length).toEqual(2);
    });

    it("renders Federal Tax Field", () => {
        const taxField = wrapper.find(".total-fed-tax");
        expect(taxField.length).toEqual(1);
    });
});
