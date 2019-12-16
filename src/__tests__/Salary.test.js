import React from "react";
import Adapater from "enzyme-adapter-react-16";
import Enzyme, {mount} from "enzyme";
import configureStore from "redux-mock-store";
import Salary from "../components/Salary";

Enzyme.configure({adapter: new Adapater()});

describe(" Salary Component", () => {
    const initialState = {
        federalTaxData: {},
        stateTaxData: {},
        error: {
            error: false,
            errorText: ""
        }
    };

    const mockStore = configureStore();
    let store;
    let wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        store.dispatch = jest.fn();
        wrapper = mount(<Salary store={store} />);
    });

    it("renders", () => {
        expect(wrapper.exists()).toBe(true);
    });

    it("renders Button Component", () => {
        const button = wrapper.find("button");
        expect(button.length).toEqual(1);
    });

    it("calls click handler 1 time", () => {
        wrapper.debug();
        const button = wrapper.find("Button");
        button.simulate("click");
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
});
