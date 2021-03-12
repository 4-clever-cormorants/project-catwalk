import React from 'react';
import PropTypes from 'prop-types';
import style from './css/SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value }, () => {
      const { searchTerm } = this.state;
      if (searchTerm.length >= 3) {
        this.searchQuestions(() => {});
      } else {
        const { revertToOriginal } = this.props;
        revertToOriginal();
      }
    });
  }

  searchQuestions(cb) {
    const { questions } = this.props;
    const { searchTerm } = this.state;
    const questionHits = [];
    for (let i = 0; i < questions.results.length; i += 1) {
      const question = questions.results[i];
      const upperCaseSearchTerm = searchTerm.toUpperCase();
      const questionBody = question.question_body.toUpperCase();
      if (questionBody.indexOf(upperCaseSearchTerm) !== -1) {
        questionHits.push(question);
      } else {
        const answerIds = Object.keys(question.answers);
        for (let j = 0; j < answerIds.length; j += 1) {
          const answerBody = question.answers[answerIds[j]].body.toUpperCase();
          if (answerBody.indexOf(upperCaseSearchTerm) !== -1) {
            questionHits.push(question);
            break;
          }
        }
      }
    }
    if (questionHits.length === 0) {
      const { showSearchedQuestions } = this.props;
      showSearchedQuestions(questionHits, false, searchTerm);
    } else {
      const { showSearchedQuestions } = this.props;
      showSearchedQuestions(questionHits, true);
    }
    cb(questionHits, searchTerm);
  }

  render() {
    return (
      <div className={`${style.searchBar} searchBar`}>
        <form role="search">
          <label htmlFor="searchQuestions">
            <i className="fa fa-search fa-2x" aria-hidden="true" />
            <input type="text" id="searchQuestions" name="searchQuestions" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." maxLength="1000" onChange={this.handleChange.bind(this)} />
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  questions: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.shape({
      question_id: PropTypes.number,
      question_body: PropTypes.string,
      question_date: PropTypes.string,
      asker_name: PropTypes.string,
      question_helpfulness: PropTypes.number,
      reported: PropTypes.bool,
      answers: PropTypes.objectOf(PropTypes.shape({
        id: PropTypes.number,
        body: PropTypes.string,
        date: PropTypes.string,
        answerer_name: PropTypes.string,
        helpfulness: PropTypes.number,
        photos: PropTypes.arrayOf(PropTypes.string),
      })),
    })),
  }).isRequired,
  showSearchedQuestions: PropTypes.func.isRequired,
  revertToOriginal: PropTypes.func.isRequired,
};

export default SearchBar;
