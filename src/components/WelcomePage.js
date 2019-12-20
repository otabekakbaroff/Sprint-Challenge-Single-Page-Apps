import React from "react";
import {Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import CharacterList from './CharacterList';
export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Link to='/characters'>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </Link>
        <p>Click the Image to see all characters</p>
      </header>
    </section>
  );
}
