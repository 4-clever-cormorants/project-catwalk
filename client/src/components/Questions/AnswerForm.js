import React from 'react';
import PropTypes from 'prop-types';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { exitAnswerForm } = this.props;
    return (
      <div className="answerForm">
        answerForm
        <button type="button" onClick={exitAnswerForm} id="exitButton">X</button>
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
};

export default AnswerForm;
