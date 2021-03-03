import React from 'react';
import Question from './Question';
import SearchBar from './SearchBar';
import QuestionForm from './QuestionForm';

import dummyQuestions from './dummyQuestions';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsOnScreen: dummyQuestions.results.slice(0, 4),
      // change dummyQuestions to some other state that holds all questions from get request
      addQuestionClicked: false,
      currentLen: 4,
    };
  }

  loadMoreQuestions() {
    const { currentLen } = this.state;
    const newLen = currentLen + 2;
    const newQuestions = dummyQuestions.results.slice(0, newLen);
    this.setState({ currentLen: newLen, questionsOnScreen: newQuestions });
  }

  addQuestion() {
    this.setState({ addQuestionClicked: true });
  }

  exitQuestionForm() {
    this.setState({ addQuestionClicked: false });
  }

  render() {
    const { questionsOnScreen, addQuestionClicked, currentLen } = this.state;
    const allQuestionLen = dummyQuestions.results.length;
    return (
      <div>
        <h3>Questions</h3>
        <SearchBar />
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
      </div>
    );
  }
}

export default Questions;
