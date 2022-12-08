import React, { Component } from 'react';
import UploadImage from './uploadimg';

class General extends Component {
    constructor() {
        super();

        this.state = {
            name: 'John Smith',
            title: 'Software Engineer',
            image: "",
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleNewImage = (e) => {
        this.setState({ image: e.target.files[0] });
    };

    handleClick(e) {
        console.log("ok")
    }

    render() {
        const { name, title, image } = this.state;

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
                            <div className="value" contentEditable="true" id="title">{title}</div>
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
}

export default General