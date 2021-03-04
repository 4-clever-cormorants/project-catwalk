import React from 'react';
import PropTypes from 'prop-types';

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
        this.setState({ submitError: false, submitted: true });
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
    const { exitQuestionForm } = this.props;
    const {
      errorMessages,
      submitError,
      submitted,
    } = this.state;
    const errorMessage = errorMessages.join(', ');
    return (
      <div className="questionForm">
        <h3>Ask Your Question</h3>
        <h4>About the [PRODUCT NAME HERE]</h4>
        {/* needs to be passed in from app */}
        <button type="button" onClick={exitQuestionForm} id="exitButton">X</button>
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
          <button type="button" id="submitQuestion" onClick={this.handleSubmitAnswer.bind(this)} disabled={submitted}>Submit</button>
          {submitError ? `You must enter the following: ${errorMessage}` : ''}
        </form>
      </div>
    );
  }
}

QuestionForm.propTypes = {
  exitQuestionForm: PropTypes.func.isRequired,
};

export default QuestionForm;
