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
      allQuestions: dummyQuestions,
      questions: dummyQuestions,
      questionsOnScreen: dummyQuestions.results.slice(0, 4),
      searchQuestions: { product_id: 'dummy', results: [] },
      noSearchResults: false,
      searchTerm: '',
      addQuestionClicked: false,
      currentLen: 4,
      loadQuestions: false,
      hideButton: false,
    };
    this.escFunction = this.escFunction.bind(this);
    this.exitQuestionForm = this.exitQuestionForm.bind(this);
    this.showSearchedQuestions = this.showSearchedQuestions.bind(this);
    this.revertToOriginalAfterSearch = this.revertToOriginalAfterSearch.bind(this);
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
        this.setState({
          allQuestions: questions,
          questions,
          questionsOnScreen: newQuestionsOnScreen,
          loadQuestions: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    document.addEventListener('keydown', this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
  }

  fetchQuestions() {
    const { productId } = this.props;
    return axios.get('/qa/questions', {
      params: {
        productId,
        count: Number.MAX_SAFE_INTEGER,
      },
    });
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      this.exitQuestionForm();
    }
  }

  loadMoreQuestions() {
    const { currentLen, questions } = this.state;
    const newLen = currentLen + 2;
    this.setState({
      currentLen: newLen,
      questionsOnScreen: questions.results.slice(0, newLen),
      hideButton: newLen > questions.results.length,
    });
  }

  addQuestion() {
    this.setState({ addQuestionClicked: true });
  }

  exitQuestionForm() {
    this.setState({ addQuestionClicked: false });
  }

  showSearchedQuestions(results, found, searchTerm) {
    if (!found) {
      this.setState({ noSearchResults: true, searchTerm });
      return;
    }
    const { productId } = this.props;
    const searchQuestions = {};
    searchQuestions.product_id = productId.toString();
    searchQuestions.results = results;
    this.setState({
      questions: searchQuestions,
      noSearchResults: false,
      currentLen: 4,
      questionsOnScreen: searchQuestions.results.slice(0, 4),
    });
  }

  revertToOriginalAfterSearch() {
    const { allQuestions } = this.state;
    this.setState({
      questions: allQuestions,
      noSearchResults: false,
      currentLen: 4,
      questionsOnScreen: allQuestions.results.slice(0, 4),
    });
  }

  render() {
    const { productId, productName } = this.props;
    const {
      questions,
      questionsOnScreen,
      searchQuestions,
      noSearchResults,
      searchTerm,
      addQuestionClicked,
      hideButton,
      loadQuestions,
    } = this.state;
    let questionsToRender = questionsOnScreen;
    if (searchQuestions.results.length > 0) {
      questionsToRender = searchQuestions.results;
    }
    let contentToRender = '';
    if (noSearchResults) {
      contentToRender = <div className={style.noMatch}>{`No matching results for '${searchTerm}'!`}</div>;
    } else if (loadQuestions) {
      contentToRender = (
        <div className="questionsList">
          {questionsToRender.map((question) => (
            <div key={question.question_id} className="question">
              <Question
                question={question}
                productName={productName}
              />
            </div>
          ))}
        </div>
      );
    }
    return (
      <div id="qa" className={style.qa}>
        <h3>QUESTIONS AND ANSWERS</h3>
        <SearchBar
          questions={questions}
          showSearchedQuestions={this.showSearchedQuestions}
          revertToOriginalAfterSearch={this.revertToOriginalAfterSearch}
        />
        <div id="qaContent" className={style.qaContent}>
          {contentToRender}
        </div>
        <div className={`${style.qaFooterButtons}`}>
          {questions.results.length > 4 && !hideButton ? <button className={style.questionButton} type="button" onClick={this.loadMoreQuestions.bind(this)} id="loadMoreQuestions">MORE ANSWERED QUESTIONS</button> : ''}
          <button className={style.questionButton} type="button" onClick={this.addQuestion.bind(this)} id="addQuestionButton">ADD A QUESTION</button>
        </div>
        {addQuestionClicked ? <QuestionForm exitQuestionForm={() => this.exitQuestionForm()} productId={productId} productName={productName} /> : ''}
      </div>
    );
  }
}

Questions.propTypes = {
  productId: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
};

export default Questions;
