/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
import React from 'react';

class AddReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
      recommend: '',
      rating: 0,
      reviewSummary: '',
      reviewBody: '',
      email: '',
      nickname: '',
    }
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div onChange={this.onChangeValue}>
        <span>Enter your rating</span>
        <button type="submit">Add New Review</button>
        <br></br>
        <span> Characteristics</span>
        <br></br>
        <span>Size<  /span>
        <input type="radio" value="1" name="size" />A size too small
        <input type="radio" value="2" name="size" />1/2 a size too small
        <input type="radio" value="3" name="size" />Perfect
        <input type="radio" value="4" name="size" />1/2 a size too big
        <input type="radio" value="5" name="size" />A size too wide
        <br></br>
        <span>Width  </span>
        <input type="radio" value="1" name="width" />Too Narrow
        <input type="radio" value="2" name="width" />Slightly Narrow
        <input type="radio" value="3" name="width" />Perfect
        <input type="radio" value="4" name="width" />Slightly Wide
        <input type="radio" value="5" name="width" />Too Wide
        <br></br>
        <span>Comfort  </span>
        <input type="radio" value="1" name="comfort" />Uncomfortable
        <input type="radio" value="2" name="comfort" />Slightly Uncomfortable
        <input type="radio" value="3" name="comfort" />OK
        <input type="radio" value="4" name="comfort" />Comfortable
        <input type="radio" value="5" name="comfort" />Perfect
        <br></br>
        <span>Quality  </span>
        <input type="radio" value="1" name="quality" />Runs Short
        <input type="radio" value="2" name="quality" />Runs Slightly Short
        <input type="radio" value="3" name="quality" />Perfect
        <input type="radio" value="4" name="quality" />Runs Slightly Long
        <input type="radio" value="5" name="quality" />Runs Long
        <br></br>
        <span>Length  </span>
        <input type="radio" value="1" name="quality" />Runs Tight
        <input type="radio" value="2" name="quality" />Runs Slightly Tight
        <input type="radio" value="3" name="quality" />Perfect
        <input type="radio" value="4" name="quality" />Runs Slightly Long
        <input type="radio" value="5" name="quality" />Runs Long
        <br></br>

      </div>
    )
  }
}

export default AddReview;

