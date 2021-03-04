import React from 'react';
import PropTypes from 'prop-types';

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
    const { exitAnswerForm, questionBody } = this.props;
    const {
      errorMessages,
      submitError,
      submitted,
    } = this.state;
    const errorMessage = errorMessages.join(', ');
    return (
      <div className="answerForm">
        <h3>Submit your Answer</h3>
        <h4>{`[PRODUCT NAME]: ${questionBody}`}</h4>
        {/* product name needs to be passed in from apps */}
        <button type="button" className="exitButton" onClick={exitAnswerForm}>X</button>
        <form>
          <label htmlFor="answer">
            * Answer
            <textarea className="answerField" name="answerField" maxLength="1000" onChange={(e) => this.handleAnswerChange(e)} required />
          </label>
          <label htmlFor="nickname">
            * Nickname
            <input type="text" className="answerNickname" placeholder="Example: jack543!" maxLength="60" onChange={(e) => this.handleNicknameChange(e)} required />
            <p>For privacy reasons, do not use your full name or email address</p>
          </label>
          <label htmlFor="email">
            * Email
            <input type="email" className="answerEmail" placeholder="Example:jack@email.com" maxLength="60" onChange={(e) => this.handleEmailChange(e)} required />
            <p>For authentication reasons, you will not be emailed</p>
          </label>
          <label htmlFor="photos">
            Photos
            <input type="file" />
            <button type="button" className="uploadPhoto">Upload photo</button>
          </label>
          <button type="button" className="submitAnswer" onClick={this.handleSubmitAnswer.bind(this)} disabled={submitted}>Submit</button>
          {submitError ? <div className="errorMessage">{`You must enter the following: ${errorMessage}`}</div> : ''}
        </form>
      </div>
    );
  }
}

AnswerForm.propTypes = {
  exitAnswerForm: PropTypes.func.isRequired,
  questionBody: PropTypes.string.isRequired,
};

export default AnswerForm;
