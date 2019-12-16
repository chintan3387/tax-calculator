import React from "react";
import Salary from "./components/Salary";
import "./App.css";
import TaxCalculator from "./components/TaxCalculator";
import {Switch, Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h4 className="display-4">2019 Tax Calculator For Indviduals</h4>
                </div>
            </div>
            <Switch>
                <Route exact path="/" component={Salary} />
                <Route path="/salary" component={Salary} />
                <Route path="/tax" component={TaxCalculator} />
            </Switch>
        </div>
    );
}

export default App;
