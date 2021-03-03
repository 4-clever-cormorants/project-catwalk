import React from 'react';
import propTypes from 'prop-types';

class Comparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { current, clicked } = this.props;
    return (
      <div className="Comparison">
        compare `$
        {current.id}
        ` and `$
        {clicked.id}
        `
      </div>
    );
  }
}

Comparison.propTypes = {
  current: propTypes.shape({
    id: propTypes.number.isRequired,
  }).isRequired,
  clicked: propTypes.shape({
    id: propTypes.number.isRequired,
  }).isRequired,
};

export default Comparison;
