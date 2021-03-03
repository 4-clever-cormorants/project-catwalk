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
            <input type="text" id="question" name="question" />
          </label>
          <label htmlFor="nickname">
            * Nickname
            <input type="text" id="nickname" name="nickname" />
          </label>
          <label htmlFor="email">
            * Email
            <input type="text" id="email" name="email" />
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
