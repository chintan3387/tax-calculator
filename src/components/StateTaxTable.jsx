import React from "react";
import Table from "react-bootstrap/Table";

const renderTaxRows = taxObj => {
    var taxKeys = Object.keys(taxObj);
    return taxKeys.map((key, index) => {
        return (
            <tr key={index}>
                <td>{key}</td>
                <td className="underlined">{taxObj[key]}</td>
                <td className="bold">Line {index + 1}</td>
            </tr>
        );
    });
};

const StateTaxTable = props => {
    const {stateTax, grossSalary} = props.stateTaxData;
    return (
        <div>
            <h3> Ontario State Tax on your taxable Annual Income (CDN${grossSalary})</h3>
            <Table responsive className="tax-table">
                <tbody>
                    {renderTaxRows(stateTax.stateTaxObj)}
                    <tr>
                        <td className="bold">Total state tax</td>
                        <td className="underlined">{stateTax.stateTax}</td>
                        <td className="bold">Line 4</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default StateTaxTable;
