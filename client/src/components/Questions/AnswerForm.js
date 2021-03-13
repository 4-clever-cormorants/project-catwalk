import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import style from './css/Form.css';

const axios = require('axios');

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerBody: '',
      nickname: '',
      email: '',
      photos: [],
      photoUrls: [],
      uploadButtonClicked: false,
      uploadError: false,
      errorMessages: [],
      submitError: false,
      submitted: false,
      success: false,
      bodyInvalid: false,
      nameInvalid: false,
      emailInvalid: false,
    };
    this.inputRefs = [];
    for (let i = 0; i < 5; i += 1) {
      this.inputRefs.push(createRef(null));
    }
  }

  handleAnswerChange(e) {
    this.setState({ answerBody: e.target.value });
  }

  handleNicknameChange(e) {
    this.setState({ nickname: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePhotoChange(e, index) {
    const { photos } = this.state;
    const newPhotos = [...photos];
    if (!e.target.files.item(0)) {
      newPhotos[index] = undefined;
      this.setState({ photos: newPhotos, uploadError: true });
      return;
    }
    newPhotos[index] = e.target.files;
    this.setState({
      photos: newPhotos,
      uploadError: false,
    });
  }

  handleSubmitAnswer() {
    this.validateForm(() => {
      const { errorMessages } = this.state;
      if (errorMessages.length === 0) {
        const { photos } = this.state;
        let undefinedCount = 0;
        for (let i = 0; i < photos.length; i += 1) {
          if (photos[i] === undefined) {
            undefinedCount += 1;
          }
        }
        if (photos.length !== 0 && photos.length !== undefinedCount) {
          this.handleSubmitPhoto(() => {
            this.setState({ submitError: false, submitted: true }, () => {
              this.postAnswer();
            });
          });
        } else {
          this.setState({ submitError: false, submitted: true }, () => {
            this.postAnswer();
          });
        }
      } else {
        this.setState({ submitError: true });
      }
    });
  }

  handleSubmitPhoto(callback) {
    const { photos } = this.state;
    const formData = new FormData();
    let hasFormData = false;
    for (let i = 0; i < photos.length; i += 1) {
      if (photos[i] !== undefined) {
        formData.append('file', photos[i][0]);
        hasFormData = true;
      }
    }
    if (!hasFormData) {
      console.log('no photos yet');
      this.setState({ uploadError: true });
      return;
    }
    axios.post('/qa/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        console.log(response);
        const newPhotoUrls = [];
        for (let i = 0; i < response.data.length; i += 1) {
          console.log(response.data[i].Location);
          newPhotoUrls[i] = response.data[i].Location;
        }
        this.setState({
          photoUrls: newPhotoUrls,
          uploadError: false,
        }, callback);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ uploadError: true });
      });
  }

  isValidEmail() {
    const { email } = this.state;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

  postAnswer() {
    const {
      answerBody,
      nickname,
      email,
      photoUrls,
    } = this.state;
    const { questionId } = this.props;
    axios.post('/qa/answerPost', {
      body: answerBody,
      name: nickname,
      email,
      photos: photoUrls,
      questionId,
    })
      .then(() => {
        this.setState({ success: true, submitError: false });
      })
      .catch((err) => {
        console.log(err);
        const submitErrorMessage = ['Error submitting'];
        this.setState({
          success: false,
          submitted: false,
          submitError: true,
          errorMessages: submitErrorMessage,
        });
      });
  }

  validateForm(callback) {
    const {
      answerBody,
      nickname,
      email,
    } = this.state;
    const errorMessages = [];
    let bodyInvalid = false;
    let nameInvalid = false;
    let emailInvalid = false;
    if (answerBody.length === 0) {
      errorMessages.push('Answer');
      bodyInvalid = true;
    }
    if (nickname.length === 0) {
      errorMessages.push('Nickname');
      nameInvalid = true;
    }
    if (email.length === 0) {
      errorMessages.push('Email address');
      emailInvalid = true;
    } else if (!this.isValidEmail()) {
      errorMessages.push('The email address provided is not in correct email format');
      emailInvalid = true;
    }
    this.setState({
      errorMessages,
      bodyInvalid,
      nameInvalid,
      emailInvalid,
    }, callback);
  }

  photoInputs() {
    const photoInputArray = [];
    const {
      photos,
      uploadButtonClicked,
      submitted,
      success,
    } = this.state;
    const { questionId } = this.props;
    for (let i = 0; i < 5; i += 1) {
      photoInputArray.push(
        <div className={`${style.fileInput} fileInput`} key={`fileInput-${i}-${questionId}`} hidden={photos.length < i}>
          <input type="file" accept="image/*" ref={this.inputRefs[i]} className={style.file} key={`image-input-${i}`} id={`image-input-${i}-${questionId}`} onChange={(e) => this.handlePhotoChange(e, i)} />
          <button
            type="button"
            className={`${!uploadButtonClicked && !success ? style.uploadPhoto : style.uploadPhotoDisabled} uploadPhoto`}
            key={`image-button-${i}-${questionId}`}
            id={`image-button-${i}-${questionId}`}
            onClick={() => {
              this.inputRefs[i].current.click();
            }}
            disabled={success}
          >
            {photos[i] ? <div className={`${style.uploadButtonText} uploadButtonText`}>{photos[i][0].name}</div> : 'UPLOAD PHOTO'}
          </button>
        </div>,
      );
    }
    return photoInputArray.map((inputs) => inputs);
  }

  render() {
    const {
      exitAnswerForm,
      questionBody,
      productName,
      addAnswerClicked,
    } = this.props;
    const {
      errorMessages,
      submitError,
      submitted,
      success,
      uploadError,
      bodyInvalid,
      nameInvalid,
      emailInvalid,
    } = this.state;
    const errorMessage = errorMessages.join(', ');
    const bodyClass = bodyInvalid ? `${style.invalidField} answerField` : 'answerField';
    const nameClass = nameInvalid ? `${style.invalidField} answerNickname` : 'answerNickname';
    const emailClass = emailInvalid ? `${style.invalidField} answerEmail` : 'answerEmail';
    let submitButtonClass = style.submitButton;
    let submitButtonText = 'SUBMIT';
    let submitIcon = '';
    if (submitted && !success && !submitError) {
      submitIcon = <i className="fa fa-spinner fa-pulse" />;
      submitButtonText = 'SUBMITTING';
      submitButtonClass = style.submitButtonDisabled;
    } else if (submitted && success) {
      submitIcon = <i className="fa fa-check-circle" aria-hidden="true" />;
      submitButtonText = 'SUBMITTED';
      submitButtonClass = style.submitButtonDisabled;
    }
    return (
      <div className={`${style.modal} ${addAnswerClicked ? style.modalShow : ''}`}>
        <div className={style.blocker} onClick={exitAnswerForm} />
        <div className={`${style.form} answerForm`}>
          <div className={`${style.formHeader} answerFormHeader`}>
            <div className={`${style.formTitle} answerFormTitle`}>
              <h3>Submit your Answer</h3>
              <h4 className={`${style.formSubTitle} answerFormSubTitle`}>{`${productName}: ${questionBody}`}</h4>
            </div>
            <button type="button" className={`${style.exitButton} exitButton`} onClick={exitAnswerForm}><span>X</span></button>
          </div>
          <div className={`${style.formContent} answerFormContent`}>
            <form>
              <label htmlFor="answer">
                Answer *
                <textarea className={bodyClass} name="answerField" maxLength="1000" onChange={(e) => this.handleAnswerChange(e)} required />
              </label>
              <label htmlFor="nickname">
                Nickname *
                <input type="text" className={nameClass} placeholder="Example: jack543!" maxLength="60" onChange={(e) => this.handleNicknameChange(e)} required />
                <p className={style.fieldDescription}>
                  For privacy reasons, do not use your full name or email address
                </p>
              </label>
              <label htmlFor="email">
                Email *
                <input type="email" className={emailClass} placeholder="Example: jack@email.com" maxLength="60" onChange={(e) => this.handleEmailChange(e)} required />
                <p className={style.fieldDescription}>
                  For authentication reasons, you will not be emailed
                </p>
              </label>
              <label htmlFor="photos">
                Photos
                <div className={style.photoUploadContainer}>
                  {this.photoInputs()}
                  {uploadError ? <div className={`${style.uploadError} uploadError`}>Error uploading photo</div> : ''}
                </div>
              </label>
              <div className={`${style.buttonContainer}`}>
                <button type="button" className={`${submitButtonClass} submitAnswer`} onClick={this.handleSubmitAnswer.bind(this)} disabled={success}>
                  {submitButtonText}
                  &nbsp;
                  {submitIcon}
                </button>
              </div>
              {submitError ? <div className={`${style.errorMessage} errorMessage`}>{`You must enter the following: ${errorMessage}`}</div> : ''}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AnswerForm.propTypes = {
  exitAnswerForm: PropTypes.func.isRequired,
  questionBody: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  addAnswerClicked: PropTypes.bool,
};

AnswerForm.defaultProps = {
  addAnswerClicked: false,
};

export default AnswerForm;
