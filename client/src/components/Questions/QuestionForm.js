import React from 'react';
import PropTypes from 'prop-types';
import style from './css/Form.css';

const axios = require('axios');

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBody: '',
      nickname: '',
      email: '',
      errorMessages: [],
      submitError: false,
      submitted: false,
      success: false,
      bodyInvalid: false,
      nameInvalid: false,
      emailInvalid: false,
    };
  }

  handleQuestionChange(e) {
    this.setState({ questionBody: e.target.value });
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
        this.setState({ submitError: false, submitted: true },
          this.postQuestion());
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

  postQuestion() {
    const { productId } = this.props;
    const { questionBody, nickname, email } = this.state;
    axios.post('/qa/questionPost', {
      productId,
      body: questionBody,
      name: nickname,
      email,
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
    const { questionBody, nickname, email } = this.state;
    const errorMessages = [];
    let bodyInvalid = false;
    let nameInvalid = false;
    let emailInvalid = false;
    if (questionBody.length === 0) {
      errorMessages.push('Question');
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
      exitQuestionForm,
      productName,
      addQuestionClicked,
    } = this.props;
    const {
      errorMessages,
      submitError,
      submitted,
      success,
      bodyInvalid,
      nameInvalid,
      emailInvalid,
    } = this.state;
    const errorMessage = errorMessages.join(', ');
    const bodyClass = bodyInvalid ? `${style.invalidField} questionField` : 'questionField';
    const nameClass = nameInvalid ? `${style.invalidField} questionNickname` : 'questionNickname';
    const emailClass = emailInvalid ? `${style.invalidField} questionEmail` : 'questionEmail';
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
      <div className={`${style.modal} ${addQuestionClicked ? style.modalShow : ''}`}>
        <div className={style.blocker} onClick={exitQuestionForm} />
        <div className={`${style.form} questionForm`}>
          <div className={`${style.formHeader} questionFormHeader`}>
            <div className={`${style.formTitle} questionFormTitle`}>
              <h3>Ask Your Question</h3>
              <h4 className={`${style.formSubTitle} answerFormSubTitle`}>{`About ${productName}`}</h4>
            </div>
            <button type="button" onClick={exitQuestionForm} id="exitButton" className={`${style.exitButton}`}><span>X</span></button>
          </div>
          <div className={`${style.formContent} questionFormContent`}>
            <form>
              <label htmlFor="question">
                Question *
                <textarea id="questionField" className={bodyClass} name="questionField" maxLength="1000" onChange={(e) => this.handleQuestionChange(e)} />
              </label>
              <label htmlFor="nickname">
                Nickname *
                <input type="text" id="questionNickname" className={nameClass} name="questionNickname" placeholder="Example: jackson11!" maxLength="60" onChange={(e) => this.handleNicknameChange(e)} />
                <p className={style.fieldDescription}>
                  For privacy reasons, do not use your full name or email address
                </p>
              </label>
              <label htmlFor="email">
                Email *
                <input type="text" id="questionEmail" className={emailClass} name="questionEmail" placeholder="Why did you like the product or not?" maxLength="60" onChange={(e) => this.handleEmailChange(e)} />
                <p className={style.fieldDescription}>
                  For authentication reasons, you will not be emailed
                </p>
              </label>
              <div className={`${style.buttonContainer}`}>
                <button type="button" id="submitQuestion" className={submitButtonClass} onClick={this.handleSubmitAnswer.bind(this)} disabled={success}>
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

QuestionForm.propTypes = {
  exitQuestionForm: PropTypes.func.isRequired,
  productId: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  addQuestionClicked: PropTypes.bool,
};

QuestionForm.defaultProps = {
  addQuestionClicked: false,
};

export default QuestionForm;
