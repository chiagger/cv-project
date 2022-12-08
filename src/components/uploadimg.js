import React from "react";
import ReactAvatarEditor from "react-avatar-editor";

class UploadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            allowZoomOut: false,
            position: { x: 0.5, y: 0.5 },
            scale: 1,
            rotate: 0,
            borderRadius: 10,
            preview: null,
            width: 150,
            height: 150,
            shown: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNewImage = (e) => {
        this.setState({ image: e.target.files[0] });
        if (this.shown === true) {
            this.shown = false;
        } else {
            this.shown = true;
        }
    };
    handleScale = (e) => {
        const scale = parseFloat(e.target.value);
        this.setState({ scale });
    };
    handlePositionChange = (position) => {
        this.setState({ position });
    };
    setEditorRef = (editor) => (this.editor = editor);

    handleSubmit(e) {

    }

    render() {
        return (
            <div id="avatar">
                <div className="rightavatar">

                    <ReactAvatarEditor
                        ref={this.setEditorRef}
                        scale={parseFloat(this.state.scale)}
                        width={this.state.width}
                        height={this.state.height}
                        position={this.state.position}
                        onPositionChange={this.handlePositionChange}
                        rotate={parseFloat(this.state.rotate)}
                        borderRadius={this.state.width / (100 / this.state.borderRadius)}
                        image={this.state.image}
                        color={[255, 255, 255]}
                        className="editor-canvas"
                    />


                </div>
                <div className="leftavatar">
                    <input
                        name="upload-img-input"
                        type="file"
                        onChange={this.handleNewImage}
                        style={{ display: this.shown ? 'none' : 'block' }}
                    />
                </div>

            </div>
        )
    }
}
export default UploadImage;