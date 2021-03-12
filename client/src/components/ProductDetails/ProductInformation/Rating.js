/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import RatingModal from './RatingModal';

import css from './Rating.css';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.exitModal = this.exitModal.bind(this);
  }

  exitModal() {
    this.setState({
      clicked: false,
    });
  }

  render() {
    const { rating } = this.props;
    const { clicked } = this.state;
    const { average } = rating;
    const data = rating.raw;
    const total = rating.ratings;
    let n = Number((Math.round(average * 4) / 4).toFixed(2));
    const stars = [];
    for (let i = 0; i < 5; i += 1) {
      if (n >= 1) {
        stars.push(1);
        n -= 1;
      } else if (n >= 0 && n < 1) {
        stars.push(n);
        n = 0;
      } else if (n === 0) {
        stars.push(0);
      }
    }
    return (
      <div id="rating" className={css.rating}>
        {stars.map((star, i) => {
          if (star === 0) {
            return (
              <span className={`${css.star} ${css.empty} fa fa-star`} key={i} />
            );
          }
          if (star === 0.25) {
            return (
              <span className={`${css.star} ${css.quarter} fa fa-star`} key={i} />
            );
          }
          if (star === 0.50) {
            return (
              <span className={`${css.star} ${css.half} fa fa-star`} key={i} />
            );
          }
          if (star === 0.75) {
            return (
              <span className={`${css.star} ${css.threeQuarter} fa fa-star`} key={i} />
            );
          }
          if (star === 1) {
            return (
              <span className={`${css.star} ${css.full} fa fa-star`} key={i} />
            );
          }
        })}
        &nbsp;
        <div className={css.totalRatings}>
          ({total}) &nbsp;
          <span
            role="button"
            className={`${css.arrow}`}
            onClick={() => {
              this.setState({
                clicked: !clicked,
              });
            }}
            onKeyPress={() => {
              this.setState({
                clicked: !clicked,
              });
            }}
            tabIndex={0}
          >
            {!clicked ? (
              <span className="fa fa-angle-up" />
            ) : (
              <span className="fa fa-angle-down" />
            )}
          </span>
        </div>
        <RatingModal
          total={total}
          data={data}
          clicked={clicked}
          exitModal={this.exitModal}
        />
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.object,
};

Rating.defaultProps = {
  rating: null,
};

export default Rating;
