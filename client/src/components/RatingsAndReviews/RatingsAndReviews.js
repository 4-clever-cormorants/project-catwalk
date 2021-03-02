import React from 'react';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  //handleChange(event) {
  //  this.setState({clicked: true})
  //console.log(event.target.value);
  //}

  render() {

    return (
      <div className="Reviews">
        <h1>Ratings and Reviews</h1>
        <h3>{this.state.numReviews} reviews</h3>
        {
          // eslint-disable-next-line react/destructuring-assignment
          // eslint-disable-next-line react/jsx-wrap-multilines
          this.state.reviews.map((i, index) => <div key={index}>
            <p>{i.nickname}</p>
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
