import React from 'react';
import style from './css/SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className={`${style.searchBar} searchBar`}>
        <input type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
      </div>
    );
  }
}

export default SearchBar;
