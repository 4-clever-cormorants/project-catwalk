import React from 'react';

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
        console.log(searchTerm);
      }
    });
  }

  render() {
    return (
      <div className="searchBar">
        <input type="text" placeholder="Have a question? Search for answers…" onChange={this.handleChange.bind(this)} />
        <button type="button">Search</button>
      </div>
    );
  }
}

export default SearchBar;
