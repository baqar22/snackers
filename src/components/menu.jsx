import React, { Component } from 'react';


export default class Menu extends Component {
    groupClickHandler = () => {
        console.log('Group clicked');
    }
    render() {
        return (
            <div>
                <ul>

                    <a onClick={this.groupClickHandler}><li>Group</li></a>
                    <li>Payment</li>
                    <li>Orders</li>

                </ul>
            </div>

        );
    }
}