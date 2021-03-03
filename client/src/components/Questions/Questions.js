import React from 'react';
import Question from './Question';
import SearchBar from './SearchBar';
import QuestionForm from './QuestionForm';

import dummyQuestions from './dummyQuestions';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: dummyQuestions,
      addQuestionClicked: false,
    };
  }

  addQuestion() {
    this.setState({ addQuestionClicked: true });
  }

  exitQuestionForm() {
    this.setState({ addQuestionClicked: false });
  }

  render() {
    const { questions, addQuestionClicked } = this.state;
    // const fourQuestions = questions.results.slice(0, 4);
    return (
      <div>
        <h3>Questions</h3>
        <SearchBar />
        <div className="questionsList">
          {questions.results.map((question) => (
            <div key={question.question_id} className="question">
              <Question question={question} />
            </div>
          ))}
          {questions.results.length > 4 ? <button type="button">More Answered Questions</button> : ''}
          <button type="button" onClick={this.addQuestion.bind(this)} id="addQuestionButton">Add a question</button>
          {addQuestionClicked ? <QuestionForm exitQuestionForm={() => this.exitQuestionForm()} /> : ''}
        </div>
      </div>
    );
  }
}

export default Questions;
