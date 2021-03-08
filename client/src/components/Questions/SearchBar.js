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
        this.searchQuestions();
      }
    });
  }

  searchQuestions() {
    const { questions } = this.props;
    const { searchTerm } = this.state;
    console.log(questions, searchTerm);
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
  question: PropTypes.shape({
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
  }).isRequired,
};

export default SearchBar;
