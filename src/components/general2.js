import React, { useState } from 'react';
import Skills from './extra';
import Interests from './extraint'


const General2 = () => {
    //const [address, useremail, phone, linkedin] = useState("London, UK", "john.smith@gmail.com", "+39 9474493749", "linkedin.com/username");
    const [address, setAddress] = useState("London, UK");
    const [useremail, setUseremail] = useState("john.smith@gmail.com");
    const [phone, setPhone] = useState("+39 9474493749");
    const [linkedin, setLinkedin] = useState("linkedin.com/username");


    return (
        <div className="general2" >
            <div className="wrappergen">
                <div id="contacts">CONTACTS</div>
                <div className="wrapper">
                    <div className="label">Address</div>
                    <div className="value" contentEditable="true">{address}</div>
                </div>
                <div className="wrapper">
                    <div className="label">Email</div>
                    <div className="value" contentEditable="true">{useremail}</div>
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
    );
}


export default General2