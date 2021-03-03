import React from 'react';
import PropTypes from 'prop-types';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { exitAnswerForm, questionBody } = this.props;
    return (
      <div className="answerForm">
        <h3>Submit your Answer</h3>
        <h4>{`[PRODUCT NAME]: ${questionBody}`}</h4>
        {/* product name needs to be passed in from apps */}
        <button type="button" onClick={exitAnswerForm} className="exitButton">X</button>
        <form>
          <label htmlFor="answer">
            * Answer
            <input type="text" className="answerField" name="answerField" />
          </label>
          <label htmlFor="nickname">
            * Nickname
            <input type="text" placeholder="Example: jack543!" className="answerNickname" />
            <p>For privacy reasons, do not use your full name or email address</p>
          </label>
          <label htmlFor="email">
            * Email
            <input type="text" placeholder="Example:jack@email.com" className="answerEmail" />
            <p>For authentication reasons, you will not be emailed</p>
          </label>
          <label htmlFor="photos">
            Photos
            <input type="file" />
            <button type="button" className="uploadPhoto">Upload photo</button>
          </label>
          <button type="button" className="submitAnswer">Submit</button>
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
