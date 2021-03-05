import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import SearchBar from './SearchBar';
import QuestionForm from './QuestionForm';
import dummyQuestions from './dummyQuestions';

const axios = require('axios');

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: dummyQuestions,
      questionsOnScreen: dummyQuestions.results.slice(0, 4),
      // change dummyQuestions to some other state that holds all questions from get request
      addQuestionClicked: false,
      currentLen: 4,
      loadQuestions: false,
    };
  }

  componentDidMount() {
    const { productId } = this.props;
    axios.get('/qa/questions', {
      params: {
        productId,
      },
    })
      .then((response) => {
        const newQuestions = response.data;
        const newQuestionsOnScreen = newQuestions.results.slice(0, 4);
        this.setState({ questions: newQuestions, questionsOnScreen: newQuestionsOnScreen }, () => {
          this.setState({ loadQuestions: true });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  loadMoreQuestions() {
    const { currentLen, questions } = this.state;
    const newLen = currentLen + 2;
    const newQuestions = questions.results.slice(0, newLen);
    this.setState({ currentLen: newLen, questionsOnScreen: newQuestions });
  }

  addQuestion() {
    this.setState({ addQuestionClicked: true });
  }

  exitQuestionForm() {
    this.setState({ addQuestionClicked: false });
  }

  render() {
    const {
      questionsOnScreen,
      addQuestionClicked,
      currentLen,
      questions,
      loadQuestions,
    } = this.state;
    const allQuestionLen = questions.results.length;
    return (
      <div>
        <h3>Questions</h3>
        <SearchBar />
        {loadQuestions
          ? (
            <div className="questionsList">
              {questionsOnScreen.map((question) => (
                <div key={question.question_id} className="question">
                  <Question question={question} />
                </div>
              ))}
              {allQuestionLen > 4 && currentLen < allQuestionLen ? <button type="button" onClick={this.loadMoreQuestions.bind(this)} id="loadMoreQuestions">More Answered Questions</button> : ''}
              <button type="button" onClick={this.addQuestion.bind(this)} id="addQuestionButton">Add a question</button>
              {addQuestionClicked ? <QuestionForm exitQuestionForm={() => this.exitQuestionForm()} /> : ''}
            </div>
          ) : ''}
      </div>
    );
  }
}

Questions.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default Questions;
