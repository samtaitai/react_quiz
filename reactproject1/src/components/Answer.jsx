import PropTypes from 'prop-types'

const Answer = ({ answerText, onSelectAnswer, index, currentAnswer, correctAnswer }) => {
    const letterMapping = ['A', 'B', 'C', 'D'];
    const isCorrectAnswer = currentAnswer && answerText == correctAnswer;
    const isWrongAnswer = currentAnswer == answerText && currentAnswer != correctAnswer;
    const correctAnswerClass = isCorrectAnswer ? 'correct-answer' : '';
    const wrongAnswerClass = isWrongAnswer ? 'wrong-answer' : '';
    const disabledClass = currentAnswer ? 'disabled-answer' : '';

    return (
        <div className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`} onClick={() => onSelectAnswer(answerText)}>
            <div className="answer-letter">{letterMapping[index]}</div>
            <div className="answer-text">{ answerText}</div>
        </div>
    );
}

Answer.propTypes = {
    answerText: PropTypes.string.isRequired,
    onSelectAnswer: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    currentAnswer: PropTypes.string.isRequired,
    correctAnswer: PropTypes.string.isRequired,
};

export default Answer