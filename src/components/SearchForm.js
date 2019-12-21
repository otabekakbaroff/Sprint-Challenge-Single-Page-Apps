import React, { useState,useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios';
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";
let char = [];
export default function SearchForm() {
  let [state,setState]=useState([]);
  let [x,y]=useState();

  // checks if what user typed in isn't empty, if it is, set it to empty string, if not, then sets setState to result 
  function Search(e) {
      let result = char.filter(charter => charter === e.target.value);
      result.push(e.target.value); 
      if(e.target.value===''){
        result.pop();
      }
      if(result.length!==0){
        setState([result[0]]);
      }else{
        setState([]);
      }
      
  }
  function submitForm(e) {
    e.preventDefault();;
    if(state.length!==0){
    y(state);
    }
    if(state.length===0){
      y(undefined);
    }
  }





  //////////////////////////////////////////////////////////////////


  let url="https://rickandmortyapi.com/api/character/";
  let [current,update]=useState([]);
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
      <Link className="homeButton"to="/"><button>Home</button></Link>
      <form>
      <label className="searchBar" htmlFor="search"><h3>Quick Access</h3></label>
      <div class="searchInput">
      <input 
      id="search"
      type="text"
      placeholder="Seach a character"
      onChange={Search}
      />
      <button className="submit" onClick={submitForm} type="submit">Search</button>
      </div>
      </form>
       <div className="searchResult">
      {current.map(character=>{ 
            char.push(character.name)
            if(typeof x!=='undefined'){
              if((character.name).toLowerCase().includes(x[0].toLowerCase())){
                return (
                <Card className="result">
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
            if(state.length===0){
              return(
                <div></div>
              )
            }
            }
          })}
       </div>
    </section>
  );
}
