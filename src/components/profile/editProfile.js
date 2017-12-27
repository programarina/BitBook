import React from "react";
import Modal from "react-modal";
import DataService from "../../services/dataService";
import PropTypes from "prop-types";
import HandleErrorService from "../../services/handleError";
import PostDataService from "../../services/postDataService";

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            errorMsg: "",
            profileObject: this.props.profileObject,
            invalidEmail: "",
            file: "",
            imagePreviewUrl: "",
            fieldsError: "",
            aboutError: "",
            shortAboutError: "",
            avatarUrlError: "",
            nameHavingError: "",
            errorMsgServer: "",

        };

        this.dataService = new DataService();
        this.handleErrorService = new HandleErrorService();
        this.postDataService = new PostDataService();

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleSaveClicked = this.handleSaveClicked.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
    }

    handleChangeImage(event) {
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onloadend = () => {
            this.setState({
                file,
                imagePreviewUrl: reader.result
            });
        };
        reader.readAsDataURL(file);
        console.log(file);
    }


    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });


    }
    componentWillReceiveProps(nextProps) {
        this.setState({ profileObject: nextProps.profileObject });
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState((prevState) => {
            prevState.profileObject[name] = value;
            return prevState;
        });
    }

    handleSaveClicked() {
        this.postDataService.uploadImage(this.state.file, (image) => {
            this.setState({profileObject:this.props.profileObject.avatarUrl});
            console.log(image);
        }, error => {
            console.log(error);
        });
        
        let dataObject = {
            name: this.state.profileObject.name,
            about: this.state.profileObject.about,
            avatarUrl: this.state.profileObject.avatarUrl,
            email: this.state.profileObject.email,
            aboutShort: this.state.profileObject.aboutShort,
        };


        const invalidEmail = this.handleErrorService.validateEmail(dataObject.email);
        const fieldsError = this.handleErrorService.validateEmptyField(dataObject);
        const aboutError = this.handleErrorService.validateEmptyField(dataObject.about);
        const shortAboutError = this.handleErrorService.validateEmptyField(dataObject.aboutShort);
        const avatarUrlError = this.handleErrorService.validateEmptyField(dataObject.avatarUrl);
        const nameHavingError = this.handleErrorService.validateEmptyField(dataObject.name);

        this.setState({
            invalidEmail: invalidEmail,
            fieldsError: fieldsError,
            aboutError: aboutError,
            shortAboutError: shortAboutError,
            avatarUrlError: avatarUrlError,
            nameHavingError: nameHavingError
        });

        if (nameHavingError || aboutError || shortAboutError || avatarUrlError) {
            return;
        }




        this.dataService.updateProfile(dataObject, (response) => {
            this.props.profileUpdated(dataObject);
            this.handleCloseModal();
        }, error => {
            this.setState({ errorMsgServer: error.message });
        });

    }


    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} width="100%" />);
        }
        return (
            <div><button type="button" className="btn btn-primary editProfile" onClick={this.handleOpenModal}>Edit</button>
                <Modal
                    className="Modal__Bootstrap modal-dialog"
                    closeTimeoutMS={150}
                    isOpen={this.state.showModal}
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" onClick={this.handleCloseModal}>
                                <span aria-hidden="true">&times;</span>
                                <span className="sr-only">Close</span>
                            </button>
                            <h4 className="modal-title">Edit profile</h4>
                        </div>
                        <div className="modal-body modalBox">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={this.state.profileObject.name} onChange={this.handleChange} />
                            <span className='errorField'>{this.state.nameHavingError}</span><br />

                            <label htmlFor="about">About</label>
                            <input type="text" id="about" name="about" value={this.state.profileObject.about} onChange={this.handleChange} />
                            <span className='errorField'>{this.state.aboutError}</span><br />

                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" value={this.state.profileObject.email} onChange={this.handleChange} />
                            <div> <span className='errorField'>{this.state.invalidEmail}</span></div><br />

                            <label htmlFor="aboutShort">Short about</label>
                            <input type="text" id="aboutShort" name="aboutShort" value={this.state.profileObject.aboutShort} onChange={this.handleChange} />
                            <span className='errorField'>{this.state.shortAboutError}</span><br /><br />

                            <label htmlFor="avatar">Avatar url</label>
                            {/* <textarea id="avatar" name="avatarUrl" placeholder="Image src..." value={this.state.profileObject.avatarUrl} onChange={this.handleChange}></textarea> */}
                            <input type="file" id="avatar" onChange={this.handleChangeImage} />
                            <p><span className='errorField'>{this.state.avatarUrlError}</span></p><br />
                            <p><span className='errorField'>{this.state.errorMsgServer}</span></p><br />

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" onClick={this.handleCloseModal}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.handleSaveClicked}>Save changes</button>
                        </div>
                        {$imagePreview}
                    </div>
                </Modal>

            </div>
        );
    }
}

EditProfile.propTypes = {
    profileObject: PropTypes.object,
    profileUpdated: PropTypes.func
};
export default EditProfile;
