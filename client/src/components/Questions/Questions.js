import React from 'react';
import Question from './Question';

import dummyQuestions from './dummyQuestions';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: dummyQuestions,
    };
  }

  render() {
    const { questions } = this.state;
    // const fourQuestions = questions.results.slice(0, 4);
    return (
      <div>
        <h3>Questions</h3>
        <div className="questionsList">
          {questions.results.map((question) => (
            <div key={question.question_id} className="question">
              <Question question={question} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Questions;
