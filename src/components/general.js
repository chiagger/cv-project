import React, { useState } from 'react';
import UploadImage from './uploadimg';

const General = () => {
    const [name, setName] = useState("John Smith");
    const [jobtitle, setJobtitle] = useState("Software Engineer");


    return (
        <div id="general">
            <div className="bigwrapper">
                <div className="wrapper pp">
                    <UploadImage></UploadImage>
                </div>
                <div className="smallwrapper">
                    <div className="wrapper">
                        <div className="value" contentEditable="true" id="name">{name}</div>
                    </div>
                    <div className="wrapper">
                        <div className="value" contentEditable="true" id="title">{jobtitle}</div>
                    </div>
                </div>
            </div>
            <div className="bigwrapper about">
                <div id="aboutme">ABOUT ME</div>
                <div id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nulla ac sem tempor condimentum non quis augue. Vivamus metus lorem, ornare eu tellus quis, rutrum volutpat ipsum. Cras non lectus feugiat, euismod leo ac, feugiat lorem. Cras eget metus nibh. Nunc condimentum velit quis ultricies sodales.</div>
            </div>
        </div>
    )
}


export default General