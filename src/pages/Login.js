import React, { useState } from 'react';

function Login() {
  const [name, setName] = useState('');
  return (
    <div className="App">
      <form>
          <input
            type="text"
            id="input-player-name"
            data-testid="input-player-name"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button
            type="submit"
            data-testid="btn-play"
            onClick={ (e) => e.preventDefault() }
          >
            Jogar
          </button>
      </form>
    </div>
  );
}

export default Login;
