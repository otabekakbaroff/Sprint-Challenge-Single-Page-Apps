import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import 'semantic-ui-css/semantic.min.css'
import { Route } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import CharacterList from "./components/CharacterList"

export default function App() {
  return (
    <main>
       <Header />
       <Route exact path="/">
          <WelcomePage/>
       </Route>
       <Route path="/characters">
         <SearchForm/>
         <CharacterList/>
       </Route>
    </main>
  );
}
