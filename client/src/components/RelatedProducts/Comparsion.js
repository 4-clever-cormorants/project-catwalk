import React from 'react';
import propTypes from 'prop-types';

class Comparsion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { current, clicked } = this.props;
    return (
      <div className="comparsion">
        compare `$
        {current.id}
        ` and `$
        {clicked.id}
        `
      </div>
    );
  }
}

Comparsion.propTypes = {
  current: propTypes.shape({
    id: propTypes.number.isRequired,
  }).isRequired,
  clicked: propTypes.shape({
    id: propTypes.number.isRequired,
  }).isRequired,
};

export default Comparsion;
