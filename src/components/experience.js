import React, { Component } from 'react';
import ExperienceComp from './addComp/experienceAdd';
import uniqid from "uniqid";


class Experience extends Component {
    constructor() {
        super();

        this.state = {
            exp: {
                id: uniqid(),
                title: 'Software Engineer',
                desc: "at Google, working with React",
                since: "2020",
                to: '2022',
                where: 'London, UK'
            },
            expArray: [],
        }
    }

    handleNewExp = (e) => {
        e.preventDefault();
        console.log("ok")
        this.setState({
            exp: {
                id: this.state.exp.id,
                title: 'Software Engineer',
                desc: "at Google, working with React",
                since: "2020",
                to: '2022',
                where: 'London, UK'
            },
        });
        this.setState({
            expArray: this.state.expArray.concat(this.state.exp),
        });
    };

    render() {
        const { expArray } = this.state;

        return (
            <div id="experience">
                <div id="headingwrap">
                    <div id="heading">WORK EXPERIENCE</div>
                    <button id="addExp" onClick={this.handleNewExp}>+</button>
                </div>
                <ExperienceComp expArray={expArray}></ExperienceComp>

            </div>
        )
    }
}

export default Experience