import React from 'react';
import PropTypes from 'prop-types';
import AnswerList from './AnswerList';
import AnswerForm from './AnswerForm';
import dummyAnswers from './dummyAnswers';
import style from './css/Question.css';

const axios = require('axios');

class Question extends React.Component {
  constructor(props) {
    super(props);
    const { question } = this.props;
    this.state = {
      answers: dummyAnswers.results,
      addAnswerClicked: false,
      questionHelpfulness: question.question_helpfulness,
      increased: false,
      loadAnswers: false,
      answerCount: Number.MAX_SAFE_INTEGER,
    };
    this.updateAnswers = this.updateAnswers.bind(this);
    this.escFunction = this.escFunction.bind(this);
    this.exitAnswerForm = this.exitAnswerForm.bind(this);
  }

  componentDidMount() {
    const { test } = this.props;
    if (test) {
      this.setState({ loadAnswers: true });
      return;
    }
    this.updateAnswers(() => {});
    document.addEventListener('keydown', this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      this.exitAnswerForm();
    }
  }

  updateAnswers(callback) {
    this.fetchAnswers()
      .then((response) => {
        let answers = [...response.data.results];
        const sellerAnswers = [];
        for (let i = 0; i < answers.length; i += 1) {
          if (answers[i].answerer_name === 'Seller') {
            sellerAnswers.push(answers[i]);
            answers = [].concat(answers.slice(0, i), answers.slice(i + 1));
          }
        }
        answers = sellerAnswers.concat(answers);
        this.setState({
          answers,
          loadAnswers: true,
          answerCount: Number.MAX_SAFE_INTEGER,
        }, callback);
      })
      .catch((err) => {
        console.log('question err', err);
      });
  }

  fetchAnswers() {
    const { question } = this.props;
    const questionId = question.question_id;
    const { answerCount } = this.state;
    return axios.get('/qa/answers', {
      params: {
        questionId,
        answerCount,
      },
    });
  }

  addAnswer() {
    this.setState({ addAnswerClicked: true });
  }

  exitAnswerForm() {
    this.setState({ addAnswerClicked: false });
  }

  increaseQuestionHelpfulness() {
    const { questionHelpfulness } = this.state;
    this.setState({ increased: true, questionHelpfulness: questionHelpfulness + 1 },
      this.putHelpful());
  }

  putHelpful() {
    const { question } = this.props;
    const questionId = question.question_id;
    axios.put('/qa/questionHelpful', {
      questionId,
    })
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { question, productName } = this.props;
    const {
      answers,
      addAnswerClicked,
      questionHelpfulness,
      increased,
      loadAnswers,
    } = this.state;
    let helpfulClassName = `${style.buttonLink} questionHelpfulButton`;
    if (increased) {
      helpfulClassName = `${style.buttonLink} ${style.buttonLinkDisabled} questionHelpfulButton`;
    }
    return (
      <div className={style.questionDefault}>
        <div className={style.questionContent}>
          <div className={style.questionText}>
            <p>{`Q: ${question.question_body}`}</p>
          </div>
          <div className={style.questionFooter}>
            <p>
              <span>Helpful? </span>
              <button type="button" className={helpfulClassName} onClick={this.increaseQuestionHelpfulness.bind(this)} disabled={increased}>Yes</button>
              <span>{` (${questionHelpfulness})`}</span>
              <span> | </span>
              <button type="button" className={`${style.buttonLink} addAnswerButton`} onClick={this.addAnswer.bind(this)}>Add answer</button>
            </p>
          </div>
        </div>
        {addAnswerClicked ? <AnswerForm exitAnswerForm={() => this.exitAnswerForm()} questionBody={question.question_body} questionId={question.question_id} productName={productName} /> : ''}
        {loadAnswers ? <AnswerList answers={answers} updateAnswers={this.updateAnswers} /> : ''}
      </div>
    );
  }
}

Question.propTypes = {
  question: PropTypes.shape({
    question_id: PropTypes.number,
    question_body: PropTypes.string,
    question_date: PropTypes.string,
    asker_name: PropTypes.string,
    question_helpfulness: PropTypes.number,
    reported: PropTypes.bool,
    answers: PropTypes.objectOf(PropTypes.shape({
      id: PropTypes.number,
      body: PropTypes.string,
      date: PropTypes.string,
      answerer_name: PropTypes.string,
      helpfulness: PropTypes.number,
      photos: PropTypes.arrayOf(PropTypes.string),
    })),
  }),
  test: PropTypes.bool,
  productName: PropTypes.string.isRequired,
};

Question.defaultProps = {
  question: {
    question_id: 84312,
    question_body: 'Maiores alias voluptatem enim commodi omnis suscipit optio magnam nam.',
    question_date: '2020-08-01T00:00:00.000Z',
    asker_name: 'Ransom.Thiel83',
    question_helpfulness: 23,
    reported: false,
    answers: {
      800553: {
        id: 800553,
        body: 'Alias libero voluptas adipisci et quam iure vel.',
        date: '2020-04-23T00:00:00.000Z',
        answerer_name: 'Kenton_Gleason',
        helpfulness: 17,
        photos: [
          'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
          'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
        ],
      },
      800554: {
        id: 800554,
        body: 'Corporis voluptate fugiat nulla ut aut.',
        date: '2020-04-06T00:00:00.000Z',
        answerer_name: 'Gage64',
        helpfulness: 1,
        photos: [
          'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
        ],
      },
      800555: {
        id: 800555,
        body: 'Pariatur accusamus vitae sit in corrupti dolor ut ab.',
        date: '2020-09-21T00:00:00.000Z',
        answerer_name: 'Kelvin8',
        helpfulness: 16,
        photos: [],
      },
      800556: {
        id: 800556,
        body: 'Molestiae excepturi harum ab ipsam.',
        date: '2020-11-14T00:00:00.000Z',
        answerer_name: 'Cyrus.Bernhard94',
        helpfulness: 11,
        photos: [
          'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        ],
      },
      800557: {
        id: 800557,
        body: 'Quam aut cumque.',
        date: '2020-06-10T00:00:00.000Z',
        answerer_name: 'Darrion.Stehr99',
        helpfulness: 12,
        photos: [],
      },
      800558: {
        id: 800558,
        body: 'Et nisi dolorem sint tempore cumque facilis culpa.',
        date: '2020-03-28T00:00:00.000Z',
        answerer_name: 'Cordelia_Abshire78',
        helpfulness: 9,
        photos: [],
      },
      800560: {
        id: 800560,
        body: 'Consequatur praesentium rerum nemo voluptas est voluptas.',
        date: '2020-12-12T00:00:00.000Z',
        answerer_name: 'Alfred.Aufderhar90',
        helpfulness: 1,
        photos: [
          'https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
        ],
      },
      800561: {
        id: 800561,
        body: 'Voluptates ratione optio quo qui nemo.',
        date: '2020-05-28T00:00:00.000Z',
        answerer_name: 'Eleanora11',
        helpfulness: 10,
        photos: [],
      },
      800562: {
        id: 800562,
        body: 'Sit rerum nesciunt eaque deleniti.',
        date: '2021-02-16T00:00:00.000Z',
        answerer_name: 'Justus_Weber',
        helpfulness: 3,
        photos: [
          'https://images.unsplash.com/photo-1515110371136-7e393289662c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80',
          'https://images.unsplash.com/photo-1553981834-a23f5b69e3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        ],
      },
      800563: {
        id: 800563,
        body: 'Nam ullam velit qui consequatur minus nobis laboriosam placeat et.',
        date: '2020-03-11T00:00:00.000Z',
        answerer_name: 'Emelie.Casper',
        helpfulness: 7,
        photos: [
          'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
        ],
      },
      800564: {
        id: 800564,
        body: 'Tempore tempore illum minima ea voluptates dicta.',
        date: '2020-03-30T00:00:00.000Z',
        answerer_name: 'Thora_Bogan',
        helpfulness: 0,
        photos: [],
      },
      800566: {
        id: 800566,
        body: 'Minima ad mollitia ipsam inventore deserunt molestiae maxime cupiditate.',
        date: '2021-02-04T00:00:00.000Z',
        answerer_name: 'Imelda27',
        helpfulness: 1,
        photos: [
          'https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80',
        ],
      },
      800567: {
        id: 800567,
        body: 'Sunt omnis minima quod.',
        date: '2020-12-31T00:00:00.000Z',
        answerer_name: 'Joany_Schneider',
        helpfulness: 2,
        photos: [
          'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
          'https://images.unsplash.com/photo-1519241978701-4302ab53de1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        ],
      },
      800568: {
        id: 800568,
        body: 'Qui maiores dolor iure ipsum sapiente vel officia ipsam nihil.',
        date: '2020-03-18T00:00:00.000Z',
        answerer_name: 'Lauren54',
        helpfulness: 9,
        photos: [
          'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80',
          'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80',
        ],
      },
      800569: {
        id: 800569,
        body: 'Sit dicta aut.',
        date: '2020-11-27T00:00:00.000Z',
        answerer_name: 'Rodolfo57',
        helpfulness: 4,
        photos: [],
      },
      1443223: {
        id: 1443223,
        body: 'This is a test.',
        date: '2021-03-01T00:00:00.000Z',
        answerer_name: 'User',
        helpfulness: 0,
        photos: [],
      },
      1443224: {
        id: 1443224,
        body: 'This is a test.',
        date: '2021-03-01T00:00:00.000Z',
        answerer_name: 'User',
        helpfulness: 0,
        photos: [],
      },
    },
  },
  test: false,
};

export default Question;
