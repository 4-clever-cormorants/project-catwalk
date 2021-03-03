import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="searchBar">
        <input type="text" placeholder="Have a question? Search for answers…" />
        <button type="button">Search</button>
      </div>
    );
  }
}

export default SearchBar;
