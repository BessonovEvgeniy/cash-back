'use strict';

import React from 'react';
import CreditList from '../../credit/credit_list'

class BankDashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="dash">
                {/*<CreditList currentUser = {this.props.currentUser}/>*/}
            </div>
        );
    }
}

BankDashboard.propTypes = {
    params: React.PropTypes.object.isRequired,
    stores: React.PropTypes.object.isRequired,
    currentUser: React.PropTypes.object.isRequired
};

export default BankDashboard;