import React from "react";
import Table from "react-bootstrap/Table";
import FederalTaxTable from "./FederalTaxTable";
import "../styles/TaxCalculator.css";
import {connect} from "react-redux";
import StateTaxTable from "./StateTaxTable";

class TaxCalculator extends React.Component {
    calculateAdditionalTax = (gross, base, rate) => {
        return (gross - base) * rate;
    };

    render() {
        return (
            <React.Fragment>
                <FederalTaxTable federalTaxData={this.props.federalTaxData} />
                <StateTaxTable stateTaxData={this.props.stateTaxData} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        federalTaxData: state.federalTaxData,
        stateTaxData: state.stateTaxData
    };
};

export default connect(mapStateToProps, {})(TaxCalculator);
