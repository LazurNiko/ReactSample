import React from "react";
import Header from './Header';
import Footer from "./Footer";
import './App.scss';

const cssClasses = "app app--active";
const styleObj ={
    fontStyle: "italic",
};
const data = <ul><li>1</li></ul>;
const App = () => (
  <div className={cssClasses} style={styleObj}>
<h1>Hello123</h1>
<Header />
Some text
<Footer />
{data}
  </div>
);

export default App;