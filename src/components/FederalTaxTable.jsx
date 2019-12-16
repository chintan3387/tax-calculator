import React from "react";
import Table from "react-bootstrap/Table";

const calculateAdditionalTax = (gross, base, rate) => {
    return (gross - base) * rate;
};

const FederalTaxTable = props => {
    const {federalTaxData, grossSalary} = props.federalTaxData;
    const calculatedTax = calculateAdditionalTax(grossSalary, federalTaxData.baseAmount, federalTaxData.taxRate);
    console.log(`calculatedTax: ${calculatedTax}`);
    console.log(`baseTax: ${federalTaxData.baseTax}`);
    const finalTax = (calculatedTax + federalTaxData.baseTax).toFixed(2);
    return (
        <div>
            <h3>Federal Tax on your taxable Annual Income (CDN${grossSalary})</h3>
            <Table responsive className="tax-table">
                <tbody>
                    <tr>
                        <td colSpan="3">Your taxable income</td>
                        <td colSpan="2" className="underlined">
                            {" "}
                            {grossSalary}
                        </td>
                        <td className="bold">Line 1</td>
                    </tr>
                    <tr>
                        <td colSpan="3">Base amount</td>
                        <td colSpan="2" className="underlined">
                            - {federalTaxData.baseAmount}
                        </td>
                        <td className="bold">Line 2</td>
                    </tr>
                    <tr>
                        <td colSpan="3">Line 1 minus line 2 (this amount cannot be negative)</td>
                        <td colSpan="2" className="underlined">
                            {"= "}
                            {grossSalary - federalTaxData.baseAmount}
                        </td>
                        <td className="bold">Line 3</td>
                    </tr>
                    <tr>
                        <td colSpan="3">Federal tax rate</td>
                        <td colSpan="2" className="underlined">
                            {" x "}
                            {federalTaxData.taxRate * 100}%
                        </td>
                        <td className="bold">Line 4</td>
                    </tr>
                    <tr>
                        <td colSpan="3">Multiply the amount on line 3 by the tax rate on line 4</td>
                        <td colSpan="2" className="underlined">
                            {calculatedTax}
                        </td>
                        <td className="bold">Line 5</td>
                    </tr>
                    <tr>
                        <td colSpan="3">Tax on the amount from line 2</td>
                        <td colSpan="2" className="underlined">
                            {"+ "}
                            {federalTaxData.baseTax}
                        </td>
                        <td className="bold">Line 6</td>
                    </tr>
                    <tr>
                        <td colSpan="3">Add line 5 and 6</td>
                        <td colSpan="2" className="underlined total-fed-tax">
                            {"= "}
                            {finalTax}
                        </td>
                        <td className="bold">Line 7</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default FederalTaxTable;
