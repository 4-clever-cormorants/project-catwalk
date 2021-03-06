import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import SearchBar from './SearchBar';
import QuestionForm from './QuestionForm';
import dummyQuestions from './dummyQuestions';
import style from './css/Questions.css';

const axios = require('axios');

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: dummyQuestions,
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
        const questions = response.data;
        const newQuestionsOnScreen = questions.results.slice(0, currentLen);
        this.setState({ questions, questionsOnScreen: newQuestionsOnScreen }, () => {
          this.setState({ loadQuestions: true });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  fetchQuestions() {
    const { productId } = this.props;
    const { totalCount, loadQuestions } = this.state;
    return axios.get('/qa/questions', {
      params: {
        productId,
        count: !loadQuestions ? 5 : totalCount + 2,
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
          this.setState({
            questions,
            hideButton: true,
            questionsOnScreen,
            currentLen: newLen,
          });
          return;
        }
        const newCount = totalCount + 2;
        this.setState({
          questions,
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
    const { productId } = this.props;
    const {
      questions,
      questionsOnScreen,
      addQuestionClicked,
      hideButton,
      loadQuestions,
    } = this.state;
    return (
      <div id="qa" className={style.qa}>
        <h3>QUESTIONS AND ANSWERS</h3>
        <SearchBar />
        <div id="qaContent" className={style.qaContent}>
          {loadQuestions
            ? (
              <div className="questionsList">
                {questionsOnScreen.map((question) => (
                  <div key={question.question_id} className="question">
                    <Question question={question} />
                  </div>
                ))}
                {questions.results.length > 4 && !hideButton ? <button type="button" onClick={this.loadMoreQuestions.bind(this)} id="loadMoreQuestions">More Answered Questions</button> : ''}
              </div>
            ) : ''}
        </div>
        <button className={style.addQuestionButton} type="button" onClick={this.addQuestion.bind(this)} id="addQuestionButton">ADD A QUESTION</button>
        {addQuestionClicked ? <QuestionForm exitQuestionForm={() => this.exitQuestionForm()} productId={productId} /> : ''}
      </div>
    );
  }
}

Questions.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default Questions;
