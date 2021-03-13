import React from 'react';
import PropTypes from 'prop-types';
import AnswerFooter from './AnswerFooter';
import AnswerImageModal from './AnswerImageModal';
import style from './css/Answer.css';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageClicked: false,
      imageUrl: '',
    };
    this.exitModal = this.exitModal.bind(this);
    this.escFunction = this.escFunction.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      this.exitModal();
    }
  }

  exitModal() {
    this.setState({ imageClicked: false });
  }

  showPicture(url) {
    this.setState({ imageClicked: true, imageUrl: url });
  }

  render() {
    const { answer } = this.props;
    const { imageClicked, imageUrl } = this.state;
    return (
      <div className={`${style.answerContent} answer`}>
        <div><p className={`${style.answerText} answerText`}>{answer.body}</p></div>
        {answer.photos.length
          ? (
            <div className="answerImages">
              {answer.photos.map((photo) => <img key={photo.id} className={`${style.answerImg} answerImg`} alt={photo.id} src={photo.url} onClick={() => this.showPicture(photo.url)} loading="lazy" />)}
            </div>
          ) : ''}
        <AnswerFooter answer={answer} />
        <AnswerImageModal url={imageUrl} exitModal={this.exitModal} imageClicked={imageClicked} />
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
