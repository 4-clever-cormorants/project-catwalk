import React from 'react';
import PropTypes from 'prop-types';
import style from './css/AnswerFooter.css';

const axios = require('axios');

class AnswerFooter extends React.Component {
  constructor(props) {
    super(props);
    const { answer } = this.props;
    this.state = {
      answerHelpfulness: answer.helpfulness,
      reported: false,
      increased: false,
    };
  }

  increaseAnswerHelpfulness() {
    const { answerHelpfulness } = this.state;
    this.setState({ increased: true, answerHelpfulness: answerHelpfulness + 1 },
      this.putHelpful());
  }

  putHelpful() {
    const { answer } = this.props;
    const answerId = answer.answer_id;
    axios.put('/qa/answerHelpful', {
      answerId,
    })
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  }

  putReport() {
    const { answer } = this.props;
    const answerId = answer.answer_id;
    axios.put('/qa/answerReport', {
      answerId,
    })
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  }

  reportAnswer() {
    this.setState({ reported: true },
      this.putReport());
  }

  render() {
    const { answer } = this.props;
    const { answerHelpfulness, reported, increased } = this.state;
    const dateOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const answerNameClass = answer.answerer_name === 'Seller' ? `${style.answerNameSeller} answerName` : 'answerName';
    const helpfulClassName = increased ? `${style.buttonLink} ${style.buttonLinkDisabled} answerHelpfulButton` : `${style.buttonLink} answerHelpfulButton`;
    return (
      <div className={`${style.answerFooter} answerFooter`}>
        <div>
          <p>
            <span className={`${style.answerNameAndDate} answerNameAndDate`}>
              by
              <span className={answerNameClass}>
                {` ${answer.answerer_name}`}
              </span>
              ,
              <span className="answerDate">
                {` ${new Date(answer.date).toLocaleDateString('en-US', dateOptions)}`}
              </span>
            </span>
            <span> | </span>
            <span className={`${style.answerHelpful} answerHelpful`}>
              <span>Helpful? </span>
              <button type="button" className={helpfulClassName} onClick={this.increaseAnswerHelpfulness.bind(this)} disabled={increased}>Yes</button>
              <span>{` (${answerHelpfulness})`}</span>
            </span>
            <span> | </span>
            <span className={`${style.answerReport} answerReport`}>
              {reported ? <span>Reported</span> : <button type="button" className={`${style.buttonLink} answerReportButton`} onClick={this.reportAnswer.bind(this)}>Report</button>}
            </span>
          </p>
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
