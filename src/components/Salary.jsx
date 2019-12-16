import React from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import {connect} from "react-redux";
import {history} from "../history";
import * as actions from "../actions/index";

class Salary extends React.Component {
    constructor(props) {
        super(props);
        this.salaryRef = React.createRef();
        this.getFederalTaxData = this.getFederalTaxData.bind(this);
    }
    getFederalTaxData() {
        if (this.salaryRef.value <= 0 || this.salaryRef.value === undefined) {
            let errorText = `Please Enter Valid Salary, Entered salary (${this.salaryRef.value}) is not valid.`;
            this.props.hasErrored(errorText);
            return;
        }
        const grossSalary = this.salaryRef.value;
        this.props.getFederalTaxData(grossSalary);
        this.props.getStateTaxData(grossSalary);
        history.push("/tax");
    }
    render() {
        return (
            <div style={{margin: "1rem auto", width: "50%"}}>
                {this.props.error.error && <Alert variant="danger">{this.props.error.errorText}</Alert>}
                <label htmlFor="gross-salary-label" style={{fontWeight: "bold", fontSize: "20px"}}>
                    Enter your gross salary
                </label>
                <div style={{width: "100%", margin: "1rem auto"}}>
                    <input
                        style={{padding: "4px 2px", margin: "2px"}}
                        aria-label="Amount (to the nearest dollar)"
                        type="number"
                        ref={e => (this.salaryRef = e)}
                    />
                    <Button
                        variant="outline-secondary"
                        style={{display: "inline-block", margin: "0 1rem"}}
                        onClick={this.getFederalTaxData}
                    >
                        {" "}
                        Calculate Tax
                    </Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getFederalTaxData: grossSalary => {
            dispatch(actions.getFederalTaxData(grossSalary));
        },
        getStateTaxData: grossSalary => {
            dispatch(actions.getStateTaxData(grossSalary));
        },
        hasErrored: errorText => {
            dispatch(actions.hasErrored(errorText));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Salary);
