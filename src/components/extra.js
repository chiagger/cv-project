import React, { Component } from 'react';
import uniqid from "uniqid";
import ExtraSkill from './addComp/extraAdd';


class Extra extends Component {
    constructor() {
        super();

        this.state = {
            skill: {
                id: uniqid(),
                desc: "Team-working",

            },
            skillArray: [],
            
        }
    }

    handleNewSkill = (e) => {
        e.preventDefault();
        this.setState({
            skill: {
                id: this.state.skill.id,
                desc: "Team-working",
            },
        });
        this.setState({
            skillArray: this.state.skillArray.concat(this.state.skill),
        });
    };

 
    render() {
        const { skillArray } = this.state;

        return (
            <div id="extra">

                <div id="skills">
                    <div id="headingwrap">
                        <div id="heading">SKILLS</div>
                        <button id="addExtraSkill" onClick={this.handleNewSkill}>+</button>
                    </div>

                    <ExtraSkill skillArray={skillArray}></ExtraSkill>

                </div>

                
            </div>
        )
    }
}

export default Extra