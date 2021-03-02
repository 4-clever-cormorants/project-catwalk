/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import DummyData from './DummyData.js';
//import Review from './Review.js';
import AddReview from './AddReview.js';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      numReviews: 0,
    };
  }

  componentDidMount() {
    this.setState({
      reviews: DummyData,
      numReviews: DummyData.length,
    });
  }

  render() {
    return (
      <div className="Reviews">
        <h1>Ratings and Reviews</h1>
        <h2>{this.state.numReviews} reviews</h2>
        {
          // eslint-disable-next-line react/destructuring-assignment
          // eslint-disable-next-line react/jsx-wrap-multilines
          this.state.reviews.map((i, index) => <div key={index}>
            <p>{i.name}</p>
            <p>{i.date}</p>
            <p>{i.reviewBody}</p>
            <p>{i.response}</p>
            <button type="submit">Yes</button>
            <button type="submit">No</button>
          </div>
          )}
        <br></br>
        <AddReview />
      </div>
    )
  }
}

export default RatingsAndReviews;
