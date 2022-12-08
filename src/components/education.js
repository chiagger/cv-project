import React, { Component } from 'react';
import EducationComp from './addComp/educationAdd';
import uniqid from "uniqid";


class Education extends Component {
    constructor() {
        super();

        this.state = {
            edu: {
                id: uniqid(),
                title: 'University of London',
                desc: "Bachelors's in Software Engineering",
                since: "2017",
                to: '2020',
                where: 'London, UK'
            },
            eduArray: [],
        }
    }

    handleNewEdu = (e) => {
        e.preventDefault();
        this.setState({
            edu: {
                id: this.state.edu.id,
                title: 'University of London',
                desc: "Bachelors's in Software Engineering",
                since: "2017",
                to: '2020',
                where: "London, UK"
            },
        });
        this.setState({
            eduArray: this.state.eduArray.concat(this.state.edu),
        });
    };

    render() {
        const { eduArray } = this.state;

        return (
            <div id="education">
                <div id="headingwrap">
                    <div id="heading">EDUCATION</div>
                    <button id="addExp" onClick={this.handleNewEdu}>+</button>
                </div>

                <EducationComp eduArray={eduArray}></EducationComp>

            </div>
        )
    }


}



export default Education