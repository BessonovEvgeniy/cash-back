'use strict';
import _ from "lodash";
import React from 'react';
import RoleUtils from './../../utils/role_utils';
import Header from './../../common_components/header/header';
import CreditList from '../credit/credit_list';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dashboardMap: RoleUtils.initDashboardMap(this)
        }
    }

    render() {
        return (
            <div className=" test-dashboard">
                <Header user={this.props.currentUser}/>
                <div className="container">
                    <h1 className="first-headliner">Cash back calculator</h1>
                        <CreditList currentUser={this.props.currentUser}/>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    //contains URI params
    params: React.PropTypes.object.isRequired,
    //contains all the stores
    //current logged in user or null
    stores: React.PropTypes.object.isRequired,
    currentUser: React.PropTypes.object.isRequired
};

export default Dashboard;
