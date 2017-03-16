'use strict';

import React from 'react';

class CreditAdd extends React.Component {

    constructor(props){
        super(props);
        this.creditRequest = this.creditRequest.bind(this);
    }

    creditRequest (event){
        event.preventDefault();
        this.props.creditAdd(this.refs.bid.value);
    }

    render() {

        return (
            <div className="credit-add">
                <form onSubmit={this.creditRequest}>
                    <label>Ask Bank about Credit</label>
                    <input ref="bid"
                           name="bid"
                           placeholder="Bid"
                           type="text"
                    />
                    <button/>
                </form>
            </div>
        );
    }
};

export default CreditAdd;