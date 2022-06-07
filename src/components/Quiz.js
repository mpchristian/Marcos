import React from 'react';
import PropTypes from 'prop-types';

export default function Quiz({ triviaDataGame, triviaIndex, alternativesArray,
  handleAnswers, correctAnswer, classAnswer, isDisable }) {
  return (
    <div>
      {triviaDataGame !== undefined && (
        <h1
          data-testid="question-category"
        >
          {triviaDataGame[triviaIndex].category}
        </h1>
      )}
      {triviaDataGame !== undefined && (
        <h1
          data-testid="question-text"
        >
          {triviaDataGame[triviaIndex].question}
        </h1>
      )}
      <div data-testid="answer-options">
        {triviaDataGame !== undefined && alternativesArray
          .map((element, index) => (
            <button
              key={ index }
              type="button"
              name={ element }
              disabled={ isDisable }
              onClick={ (e) => handleAnswers(e) }
              data-testid={ element === correctAnswer()
                ? 'correct-answer'
                : `wrong-answer-${index}` }
              className={ classAnswer(element) }
            >
              {element}
            </button>
          ))}
      </div>
    </div>
  );
}

Quiz.propTypes = {
  triviaDataGame: PropTypes.arrayOf(PropTypes.object).isRequired,
  triviaIndex: PropTypes.number.isRequired,
  alternativesArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleAnswers: PropTypes.func.isRequired,
  correctAnswer: PropTypes.func.isRequired,
  classAnswer: PropTypes.func.isRequired,
  isDisable: PropTypes.bool.isRequired,
};
