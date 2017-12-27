import React from "react";
import PropTypes from "prop-types";


class AddImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: "",
            imagePreviewUrl: ""
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSaveClicked = this.handleSaveClicked.bind(this);

    }

    handleClick() {
        this.props.closeModal();
    }

    handleChange(event) {
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onloadend = () => {
            this.setState({
                file,
                imagePreviewUrl: reader.result
            });
        };
        reader.readAsDataURL(file);
    }

    handleSaveClicked() {
        let imgFile = this.state.file;
        this.props.handleImageUrl(imgFile);
    }
    

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} width="100%" height="400px"/>);
        }
        return (
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" onClick={this.handleClick}>
                        <span aria-hidden="true">&times;</span>
                        <span className="sr-only">Close</span>
                    </button>
                    <h4 className="modal-title">Add image</h4>
                </div>
                <div className="modal-body modalBox">
                    <h3>New image</h3>
                    {/* <textarea value={this.state.imageUrl} onChange={this.handleChange}></textarea> */}
                    <input name="addImg" type="file" id="addImg" onChange={this.handleChange} />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" onClick={this.handleClick}>Close</button>
                    <button type="button" className="btn btn-primary modalBtn" onClick={this.handleSaveClicked}>Save changes</button>
                </div>
                {$imagePreview}
            </div>

        );
    }
}
AddImage.propTypes = {
    closeModal: PropTypes.func,
    handleImageUrl: PropTypes.func

};
export default AddImage;