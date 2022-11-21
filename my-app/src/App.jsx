import React from "react";
import Header from "./components/Header/Header.jsx";
import Welcome from "./components/Welcome/Welcome.jsx";
import Article from './components/Article/Article.jsx';
import './App.scss';

function App() {
  return (
    <main className="app" >
      <Welcome />
      <Header />
      <Article />
    </main>
  );
}

export default App;