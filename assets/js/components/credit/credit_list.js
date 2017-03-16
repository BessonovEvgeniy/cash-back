'use strict';

import React from 'react';
import CreditItem from '../credit/credit_item';
import CreditAdd from '../credit/credit_add';
import CreditAction from '../../actions/credits';

class CreditList extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            currentUser: this.props.currentUser,
            credits: []
        };
        if (this.props.currentUser.Role.name === "bank") {
            CreditAction.getAllAsync({},{}).then(credits => {
                this.setState({credits});
            })
        }
        else {
            let {id} = this.props.currentUser.Client;
            CreditAction.getByClientIdAsync({id},{}).then(credits => {
                this.setState({credits});
            });
        }

        this.creditAdd = this.creditAdd.bind(this);
        this.creditApproved = this.creditApproved.bind(this);
    }

    creditAdd(bid){
        let id = this.props.currentUser.Client.id;
        CreditAction.setBidByClientIdAsync({id, bid},{}).then(credit => {

            let credits = this.state.credits;
            credits.push(credit);
            this.setState({credits});

        })
    }

    creditApproved(credit){
        let id = credit.id;
        let approved = credit.approved;

        CreditAction.setCreditStatusAsync({id, approved},{}).then(() => {

            let credits = this.state.credits;
            credits.forEach((item)=>{
                if (item.id === id){
                    item.approved = approved;
                }
            })
            this.setState({credits});

        })
    }

    getAddCreditForm(){
        if (this.props.currentUser.Role.name !== "bank") {
            return <CreditAdd creditAdd={this.creditAdd}/>;
        }
    }

    render(){
        return (
            <div className="credit-list">
                {this.getAddCreditForm()}
                {
                    this.state.credits.map(credit => {
                        return (<CreditItem credit={credit} roleName={this.props.currentUser.Role.name} creditApproved={this.creditApproved}/>);
                    })
                }
            </div>
        );
    }
}

CreditList.propTypes = {
    //contains URI params
    params: React.PropTypes.object.isRequired,
    //contains all the stores
    stores: React.PropTypes.object.isRequired,
    //current logged in user or null
    currentUser: React.PropTypes.object.isRequired
};

export default CreditList;
