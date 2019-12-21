import React from "react";
import {Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import CharacterList from './CharacterList';
export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Link className="HomeImage" to='/characters'>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </Link>
        <h3 className="Caption">Click the Image to see all characters</h3>
      </header>
    </section>
  );
}
