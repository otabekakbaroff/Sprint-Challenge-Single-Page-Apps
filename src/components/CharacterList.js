import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
const url="https://rickandmortyapi.com/api/character/";
export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [current,update]=useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(url)
    .then(response=>{
      const characters=response.data.results;
      update(characters)
    })
  }, []);

  return (
        <section className="character-list">
          <Link to="/"><button class="homeButton">Home</button></Link>
          {current.map(character=>{
            return <CharacterCard 
            key={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            species={character.species}
            gender={character.gender}
            />
          })}
        </section>
  );
}
