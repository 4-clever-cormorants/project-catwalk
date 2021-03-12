import React from 'react';
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
      errorMessages: [],
      submitError: false,
      submitted: false,
      bodyInvalid: false,
      nameInvalid: false,
      emailInvalid: false,
    };
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
      console.log('not a valid file');
      // newPhotoes[index] = undefined
      newPhotos[index] = undefined;
      return;
    }
    // take two parameters, e, and index
    // newPhotos[index] = e.target.files
    newPhotos[index] = e.target.files;
    //newPhotos.push(e.target.files);
    console.log(JSON.stringify(e.target.files.item(0)));
    console.log(e.target.value);
    this.setState({
      photos: newPhotos,
    });
  }

  handleSubmitAnswer() {
    this.validateForm(() => {
      const { errorMessages } = this.state;
      if (errorMessages.length === 0) {
        this.setState({ submitError: false, submitted: true }, () => {
          this.postAnswer();
        });
      } else {
        this.setState({ submitError: true });
      }
    });
  }

  handleSubmitPhoto(e) {
    const { photos } = this.state;
    if (photos.length === 0) {
      console.log('no photos yet');
      return;
    }
    console.log('ok', photos, e);
    console.log(photos[0]);
    const formData = new FormData();
    console.log(photos.length);
    for (let i = 0; i < photos.length; i += 1) {
      formData.append('file', photos[i][0]);
    }
    // formData.append('file', photos[0][0]);
    axios.post('/qa/test-upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        console.log(response);
        for (let i = 0; i < response.data.length; i += 1) {
          console.log(response.data[i].Location);
        }
        this.setState({ uploadButtonClicked: true });
        // console.log(response.data.Location);
        // const { photoUrls } = this.state;
        // const newPhotoUrls = [...photoUrls];
        // newPhotoUrls.push(response.data.Location);
        // this.setState({ photoUrls: newPhotoUrls, uploadButtonClicked: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  isValidEmail() {
    const { email } = this.state;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

  postAnswer() {
    const { answerBody, nickname, email } = this.state;
    const { questionId } = this.props;
    axios.post('/qa/answerPost', {
      body: answerBody,
      name: nickname,
      email,
      photos: [],
      questionId,
    })
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  }

  validateForm(callback) {
    const { answerBody, nickname, email } = this.state;
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
      uploadButtonClicked,
      bodyInvalid,
      nameInvalid,
      emailInvalid,
    } = this.state;
    const errorMessage = errorMessages.join(', ');
    const bodyClass = bodyInvalid ? `${style.invalidField} answerField` : 'answerField';
    const nameClass = nameInvalid ? `${style.invalidField} answerNickname` : 'answerNickname';
    const emailClass = emailInvalid ? `${style.invalidField} answerEmail` : 'answerEmail';
    const submitButtonClass = submitted ? style.submitButtonDisabled : style.submitButton;
    const submitButtonText = submitted ? 'SUBMITTED' : 'SUBMIT';
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
                  <input type="file" accept="image/*" onChange={(e) => this.handlePhotoChange(e, 0)} />
                  {!uploadButtonClicked ? <button type="button" className={`${style.uploadPhoto} uploadPhoto`} onClick={(this.handleSubmitPhoto.bind(this))}>UPLOAD</button> : ''}
                </div>
              </label>
              <div className={`${style.buttonContainer}`}>
                <button type="button" className={`${submitButtonClass} submitAnswer`} onClick={this.handleSubmitAnswer.bind(this)} disabled={submitted}>
                  {submitButtonText}
                  &nbsp;
                  {submitted ? <i className="fa fa-check-circle" aria-hidden="true" /> : ''}
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
