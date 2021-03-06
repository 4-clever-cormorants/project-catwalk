import React from 'react';
import PropTypes from 'prop-types';
import style from './css/QuestionForm.css';

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
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  }

  validateForm(callback) {
    const { questionBody, nickname, email } = this.state;
    const errorMessages = [];
    if (questionBody.length === 0) {
      errorMessages.push('Question');
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
    const { exitQuestionForm, productName } = this.props;
    const {
      errorMessages,
      submitError,
      submitted,
    } = this.state;
    const errorMessage = errorMessages.join(', ');
    return (
      <div className={`${style.questionForm} questionForm`}>
        <div className={`${style.questionFormHeader} questionFormHeader`}>
          <div className={`${style.questionFormTitle} questionFormTitle`}>
            <h3>Ask Your Question</h3>
            <h4>{`About ${productName}`}</h4>
          </div>
          <button type="button" onClick={exitQuestionForm} id="exitButton" className={`${style.exitButton}`}>X</button>
        </div>
        <div className={`${style.questionFormContent} questionFormContent`}>
          <form>
            <label htmlFor="question">
              * Question
              <textarea id="questionField" name="questionField" onChange={(e) => this.handleQuestionChange(e)} />
            </label>
            <label htmlFor="nickname">
              * Nickname
              <input type="text" id="questionNickname" name="questionNickname" placeholder="Example: jackson11!" onChange={(e) => this.handleNicknameChange(e)} />
              <p>For privacy reasons, do not use your full name or email address</p>
            </label>
            <label htmlFor="email">
              * Email
              <input type="text" id="questionEmail" name="questionEmail" placeholder="Why did you like the product or not?" onChange={(e) => this.handleEmailChange(e)} />
              <p>For authentication reasons, you will not be emailed</p>
            </label>
            <div className={`${style.buttonContainer}`}>
              <button type="button" id="submitQuestion" className={`${style.submitQuestionButton}`} onClick={this.handleSubmitAnswer.bind(this)} disabled={submitted}>Submit</button>
            </div>
            {submitError ? <div className={`${style.errorMessage} errorMessage`}>{`You must enter the following: ${errorMessage}`}</div> : ''}
          </form>
        </div>
      </div>
    );
  }
}

QuestionForm.propTypes = {
  exitQuestionForm: PropTypes.func.isRequired,
  productId: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
};

export default QuestionForm;
