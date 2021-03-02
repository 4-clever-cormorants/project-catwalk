import React from 'react';
import PropTypes from 'prop-types';

class AnswerFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { answer } = this.props;
    const dateOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return (
      <div className="answerFooter">
        <div className="answerNameAndDate">
          <p className="answerName">
            {`by ${answer.answerer_name}, `}
            <span className="answerDate">
              {`${new Date(answer.date).toLocaleDateString('en-US', dateOptions)}`}
            </span>
          </p>
        </div>
        <div className="answerHelpful">
          <p>{`Helpful? Yes (${answer.helpfulness})`}</p>
        </div>
        <div className="answerReport">
          <p>Report</p>
        </div>
      </div>
    );
  }
}

AnswerFooter.propTypes = {
  answer: PropTypes.shape({
    answer_id: PropTypes.number,
    body: PropTypes.string,
    date: PropTypes.string,
    answerer_name: PropTypes.string,
    helpfulness: PropTypes.number,
    photos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      url: PropTypes.string,
    })),
  }),
};

AnswerFooter.defaultProps = {
  answer: {
    answer_id: 800553,
    body: 'Alias libero voluptas adipisci et quam iure vel.',
    date: '2020-04-23T00:00:00.000Z',
    answerer_name: 'Kenton_Gleason',
    helpfulness: 17,
    photos: [
      {
        id: 682123,
        url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
      },
      {
        id: 682124,
        url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
      },
    ],
  },
};

export default AnswerFooter;
