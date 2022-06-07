import React from 'react';
import { questions } from '../data';
import { generateAnswer } from '../helpers/generateAnswer';

function AllQuestions() {

  return (
    <div>
      <h1>All Questions</h1>
      {questions.map((elem, index) => (
        <div key={elem.id}>
          {`${index}: ${generateAnswer(4)}`}
        </div>
      ))}
    </div>
  );
}

export default AllQuestions;
