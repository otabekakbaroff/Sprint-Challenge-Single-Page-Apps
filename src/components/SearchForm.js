import React, { useState,useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios';
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";
let char = [];
export default function SearchForm() {
  const [state,setState]=useState();
  const [x,y]=useState();
  function Search(e) {
      let result = char.filter(charter => charter === e.target.value);
      if(result.length!==0){
        setState(result[0]);
      }else{
        setState('');
      }
  }
  function submitForm(e) {
    e.preventDefault();
    if(state.length!==0){
    y(state);
    }
  }




  //////////////////////////////////////////////////////////////////


  const url="https://rickandmortyapi.com/api/character/";
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
    <section className="search-form">
      <label htmlFor="search"><h3>Quick Access</h3></label>
      <input 
      id="search"
      type="text"
      placeholder="Seach a character"
      onChange={Search}
      />
      <Link to="/characters/search"><button onClick={submitForm} type="submit">Search</button></Link>
      {current.map(character=>{
            console.log(character.name)
            char.push(character.name);
            if(character.name===x){
                return (
                <Card>
                <Image src={character.image} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{character.name}</Card.Header>
                  <Card.Meta>
              <span className='date'>Status: {character.status}</span>
                  </Card.Meta>
                  <Card.Description>
                    Gender: {character.gender}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    {character.species}
                  </a>
                </Card.Content>
              </Card>
                )
            }
          })}
    </section>
  );
}
