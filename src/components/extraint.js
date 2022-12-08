import React, { Component } from 'react';
import uniqid from "uniqid";
import Extrainterest from './addComp/extraaddint.js';


class Extraint extends Component {
    constructor() {
        super();

        this.state = {
            interest: {
                id: uniqid(),
                desc: "Reading",

            },
            interestArray: [],
            
        }
    }

    handleNewInterest = (e) => {
        e.preventDefault();
        console.log("Ok")
        this.setState({
            interest: {
                id: this.state.interest.id,
                desc: "Reading",
            },
        });
        this.setState({
            interestArray: this.state.interestArray.concat(this.state.interest),
        });
    };

 
    render() {
        const { interestArray } = this.state;

        return (
            <div id="extra">
                <div id="skills">
                    <div id="headingwrap">
                        <div id="heading">INTERESTS</div>
                        <button id="addExtraInterest" onClick={this.handleNewInterest}>+</button>
                    </div>
                    <Extrainterest interestArray={interestArray}></Extrainterest>


                </div>


            </div>
        )
    }
}

export default Extraint