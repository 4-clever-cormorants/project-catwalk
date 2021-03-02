/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable no-multi-spaces */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-else-return */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
import React from 'react';

class AddReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recommend: '',
      rating: 0,
      reviewSummary: '',
      reviewBody: '',
      email: '',
      nickname: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
    console.log(event.target.name)
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  submitData(event) {
    event.preventDefault();
    console.log(this.state)
   
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
              <h2>Enter your ratings</h2>
              <h4> Characteristics</h4>
              <span>Size</span>
              <br></br>
              <input type="radio" value="1" name="size" />A size too small
              <input type="radio" value="2" name="size" />1/2 a size too small
              <input type="radio" value="3" name="size" />Perfect
              <input type="radio" value="4" name="size" />1/2 a size too big
              <input type="radio" value="5" name="size" />A size too wide
              <br></br>
              <span>Width  </span>
              <br></br>
              <input type="radio" value="1" name="width" />Too Narrow
              <input type="radio" value="2" name="width" />Slightly Narrow
              <input type="radio" value="3" name="width" />Perfect
              <input type="radio" value="4" name="width" />Slightly Wide
              <input type="radio" value="5" name="width" />Too Wide
              <br></br>
              <span>Comfort  </span>
              <br></br>
              <input type="radio" value="1" name="comfort" />Uncomfortable
              <input type="radio" value="2" name="comfort" />Slightly Uncomfortable
              <input type="radio" value="3" name="comfort" />OK
              <input type="radio" value="4" name="comfort" />Comfortable
              <input type="radio" value="5" name="comfort" />Perfect
              <br></br>
              <span>Quality  </span>
              <br></br>
              <input type="radio" value="1" name="quality" />Runs Short
              <input type="radio" value="2" name="quality" />Runs Slightly Short
              <input type="radio" value="3" name="quality" />Perfect
              <input type="radio" value="4" name="quality" />Runs Slightly Long
              <input type="radio" value="5" name="quality" />Runs Long
              <br></br>
              <span>Length  </span>
              <br></br>
              <input type="radio" value="1" name="quality" />Runs Tight
              <input type="radio" value="2" name="quality" />Runs Slightly Tight
              <input type="radio" value="3" name="quality" />Perfect
              <input type="radio" value="4" name="quality" />Runs Slightly Long
              <input type="radio" value="5" name="quality" />Runs Long
              <br></br>
              <span>
                  <br></br>
        <span>
          Nickname :
          <input name="nickname" type="text" placeholder="jackson11!" maxLength={60} value={this.state.nickname} onChange={this.handleChange} />
        </span>
        <br></br>
        <br></br>
          Review Summary :
          <textarea name="reviewSummary" type="text" value={this.state.reviewSummary} onChange={this.handleChange} />
        </span>
        <br></br>
        <br></br>
        <span>
          Review Body :
          <textarea  name="reviewBody" type="text" placeholder="Why did you like the product or not?"  maxLength={1000} value={this.state.reviewBody} onChange={this.handleChange} />
        </span>
        <br></br>
        <br></br>
        <span>
          Email :
          <input name="email" type="text" placeholder="jackson11@email.com@" maxLength={60}  value={this.state.email} onChange={this.handleChange} />
        </span>
        <br></br>
        <br></br>
             <button type="submit" onClick={(event) => this.submitData(event)}>Add New Review</button>
           </form>
    )
    }
  }


export default AddReview;

