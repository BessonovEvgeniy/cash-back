'use strict';

import React from 'react';

class CreditItem extends React.Component {

    constructor(props) {
        super(props);
        this.creditSetStatus = this.creditSetStatus.bind(this);
    }

    creditSetStatus(isApproved){
        event.preventDefault();
        this.props.credit.approved = isApproved;
        this.props.creditApproved(this.props.credit);
    }

    getCreditActions() {
        if (this.props.roleName === "bank") {
            return <div>
                <button onClick={()=>{this.creditSetStatus(true)}}>Approve</button>
                <button onClick={()=>{this.creditSetStatus(false)}}>Disapprove</button>
            </div>
        }
    }

    getCreditStatus(){
        if (this.props.credit.approved) {
            return <label>Approved</label>
        }
        else {
            return <label>Not approved</label>
        }
    }

    render() {
        return (
            <div className="credit-item">
                <label>{this.props.credit.bid}</label>
                {this.getCreditStatus()}
                {this.getCreditActions()}
            </div>
        );
    }
}

export default CreditItem;