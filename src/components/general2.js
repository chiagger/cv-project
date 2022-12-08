import React, { Component } from 'react';
import Skills from './extra';
import Interests from './extraint'


class General2 extends Component {
    constructor() {
        super();

        this.state = {
            email: 'john.smith@gmail.com',
            phone: '+39 8473847298',
            address: 'London, UK',
            linkedin: 'linkedin.com/in/username'
        }
    }

    render() {
        const { email, phone, address, linkedin } = this.state;

        return (
            <div className="general2">
                <div className="wrappergen">
                    <div id="contacts">CONTACTS</div>
                    <div className="wrapper">
                        <div className="label">Address</div>
                        <div className="value" contentEditable="true">{address}</div>
                    </div>
                    <div className="wrapper">
                        <div className="label">Email</div>
                        <div className="value" contentEditable="true">{email}</div>
                    </div>
                    <div className="wrapper">
                        <div className="label">Phone number</div>
                        <div className="value" contentEditable="true">{phone}</div>
                    </div>
                    <div className="wrapper">
                        <div className="label">LinkedIn</div>
                        <div className="value" contentEditable="true">{linkedin}</div>
                    </div>
                </div>
                <div className="wrappergen">
                    <Skills></Skills>
                    <Interests></Interests>
                </div>
            </div>
        )
    }
}

export default General2