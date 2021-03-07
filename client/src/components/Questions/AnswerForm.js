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
      errorMessages: [],
      submitError: false,
      submitted: false,
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
    if (answerBody.length === 0) {
      errorMessages.push('Answer');
    }
    if (nickname.length === 0) {
      errorMessages.push('Nickname');
    }
    if (email.length === 0) {
      errorMessages.push('Email address');
    } else if (!this.isValidEmail()) {
      errorMessages.push('The email address provided is not in correct email format');
    }
    this.setState({ errorMessages }, callback);
  }

  render() {
    const { exitAnswerForm, questionBody, productName } = this.props;
    const {
      errorMessages,
      submitError,
      submitted,
    } = this.state;
    const errorMessage = errorMessages.join(', ');
    return (
      <div>
        <div className={style.blocker} onClick={exitAnswerForm} />
        <div className={`${style.form} answerForm`}>
          <div className={`${style.formHeader} answerFormHeader`}>
            <div className={`${style.formTitle} answerFormTitle`}>
              <h3>Submit your Answer</h3>
              <h4>{`${productName}: ${questionBody}`}</h4>
            </div>
            <button type="button" className={`${style.exitButton} exitButton`} onClick={exitAnswerForm}>X</button>
          </div>
          <div className={`${style.formContent} answerFormContent`}>
            <form>
              <label htmlFor="answer">
                * Answer
                <textarea className="answerField" name="answerField" maxLength="1000" onChange={(e) => this.handleAnswerChange(e)} required />
              </label>
              <label htmlFor="nickname">
                * Nickname
                <input type="text" className="answerNickname" placeholder="Example: jack543!" maxLength="60" onChange={(e) => this.handleNicknameChange(e)} required />
                <p className={style.fieldDescription}>
                  For privacy reasons, do not use your full name or email address
                </p>
              </label>
              <label htmlFor="email">
                * Email
                <input type="email" className="answerEmail" placeholder="Example: jack@email.com" maxLength="60" onChange={(e) => this.handleEmailChange(e)} required />
                <p className={style.fieldDescription}>
                  For authentication reasons, you will not be emailed
                </p>
              </label>
              <label htmlFor="photos">
                Photos
                <div className={style.photoUploadContainer}>
                  <input type="file" />
                  <button type="button" className={`${style.uploadPhoto} uploadPhoto`}>UPLOAD</button>
                </div>
              </label>
              <div className={`${style.buttonContainer}`}>
                <button type="button" className={`${style.submitButton} submitAnswer`} onClick={this.handleSubmitAnswer.bind(this)} disabled={submitted}>SUBMIT</button>
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
};

export default AnswerForm;
