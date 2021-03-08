import React from 'react';
import PropTypes from 'prop-types';
import style from './css/SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      hits: [],
    };
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value }, () => {
      const { searchTerm } = this.state;
      if (searchTerm.length >= 3) {
        this.searchQuestions();
      }
    });
  }

  searchQuestions() {
    const { questions } = this.props;
    const { searchTerm } = this.state;
    console.log(questions, searchTerm);
    const questionHits = [];
    for (let i = 0; i < questions.results.length; i += 1) {
      const question = questions.results[i];
      const upperCaseSearchTerm = searchTerm.toUpperCase();
      if (question.question_body.toUpperCase().search(upperCaseSearchTerm) !== -1) {
        questionHits.push(question);
      }
    }
    if (questionHits.length === 0) {
      console.log(`no matching results for ${searchTerm}`);
    }
    for (let i = 0; i < questionHits.length; i += 1) {
      console.log(questionHits[i]);
    }
  }

  render() {
    return (
      <div className={`${style.searchBar} searchBar`}>
        <input type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

SearchBar.propTypes = {
  questions: PropTypes.shape({
    product_id: PropTypes.number,
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
};

export default SearchBar;
