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
      questionsOnScreen: dummyQuestions.results.slice(0, 4),
      addQuestionClicked: false,
      currentLen: 4,
      totalCount: 5,
      loadQuestions: false,
      hideButton: false,
    };
  }

  componentDidMount() {
    const { productId } = this.props;
    const { currentLen } = this.state;
    // for testing purposes
    if (productId === -1) {
      this.setState({ loadQuestions: true });
      return;
    }
    this.fetchQuestions()
      .then((response) => {
        const newQuestionsOnScreen = response.data.results.slice(0, currentLen);
        this.setState({ questionsOnScreen: newQuestionsOnScreen }, () => {
          this.setState({ loadQuestions: true });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  fetchQuestions() {
    const { productId } = this.props;
    const { totalCount } = this.state;
    return axios.get('/qa/questions', {
      params: {
        productId,
        count: totalCount === 5 ? totalCount : totalCount + 2,
      },
    });
  }

  loadMoreQuestions() {
    const { currentLen, totalCount } = this.state;
    this.fetchQuestions()
      .then((response) => {
        const questions = response.data;
        const questionsOnScreen = questions.results.slice(0, currentLen + 2);
        const newLen = currentLen + 2;
        if (questions.results.length < totalCount + 2) {
          this.setState({ hideButton: true, questionsOnScreen, currentLen: newLen });
          return;
        }
        const newCount = totalCount + 2;
        this.setState({
          questionsOnScreen,
          currentLen: newLen,
          totalCount: newCount,
        });
      });
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
      hideButton,
      loadQuestions,
      totalCount,
    } = this.state;
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
              {totalCount > 4 && !hideButton ? <button type="button" onClick={this.loadMoreQuestions.bind(this)} id="loadMoreQuestions">More Answered Questions</button> : ''}
            </div>
          ) : ''}
        <button type="button" onClick={this.addQuestion.bind(this)} id="addQuestionButton">Add a question</button>
        {addQuestionClicked ? <QuestionForm exitQuestionForm={() => this.exitQuestionForm()} /> : ''}
      </div>
    );
  }
}

Questions.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default Questions;
