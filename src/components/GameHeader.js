import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ score, userName, urlGravatar }) {
  return (
    <header>
      <img
        data-testid="header-profile-picture"
        src={ urlGravatar }
        alt="avatar do usuario"
      />
      <h2 data-testid="header-player-name">
        Nome do Jogador:
        { userName }
      </h2>
      <h4 data-testid="header-score">
        Score do Jogador:
        { score }
      </h4>
    </header>
  );
}

Header.propTypes = {
  score: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  urlGravatar: PropTypes.string.isRequired,
};
