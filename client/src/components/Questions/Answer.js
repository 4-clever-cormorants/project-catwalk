import React from 'react';
import PropTypes from 'prop-types';
import AnswerFooter from './AnswerFooter';
import style from './css/Answer.css';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { answer } = this.props;
    return (
      <div className={`${style.answerContent} answer`}>
        <div><p className={`${style.answerText} answerText`}>{answer.body}</p></div>
        <AnswerFooter answer={answer} />
      </div>
    );
  }
}

Answer.propTypes = {
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

Answer.defaultProps = {
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

export default Answer;
