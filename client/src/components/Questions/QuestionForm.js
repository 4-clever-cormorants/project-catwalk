import React from 'react';
import PropTypes from 'prop-types';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { exitQuestionForm } = this.props;
    return (
      <div className="questionForm">
        <h3>Ask Your Question</h3>
        <h4>About the [PRODUCT NAME HERE]</h4>
        {/* needs to be passed in from app */}
        <button type="button" onClick={exitQuestionForm} id="exitButton">X</button>
        <form>
          <label htmlFor="question">
            * Question
            <input type="text" id="questionField" name="questionField" />
          </label>
          <label htmlFor="nickname">
            * Nickname
            <input type="text" id="questionNickname" name="questionNickname" placeholder="Example: jackson11!" />
            <p>For privacy reasons, do not use your full name or email address</p>
          </label>
          <label htmlFor="email">
            * Email
            <input type="text" id="questionEmail" name="questionEmail" placeholder="Why did you like the product or not?" />
            <p>For authentication reasons, you will not be emailed</p>
          </label>
          <button type="button" id="submitQuestion">Submit</button>
        </form>
      </div>
    );
  }
}

QuestionForm.propTypes = {
  exitQuestionForm: PropTypes.func.isRequired,
};

export default QuestionForm;
