import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveName } from '../store/user';

function Login() {

  const [name, setName] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="App">
      <form>
          <input
            type="text"
            id="input-player-name"
            data-testid="input-player-name"
            placeholder="Nome"
            value={name}
            onChange={(e) => {setName(e.target.value)}}
          />

          <button
            type="submit"
            data-testid="btn-play"
            onClick={(e) => {
              e.preventDefault();
              dispatch(saveName(name));
            } }
          >
            Jogar
          </button>
      </form>
    </div>
  );
}

export default Login;
