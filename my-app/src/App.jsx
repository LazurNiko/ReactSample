import React from "react";
import Header from './Header';
import Footer from "./Footer";

const data = <ul><li>1</li></ul>;
const App = () => (
  <div>
<h1>Hello123</h1>
<Header />
Some text
<Footer />
{data}
  </div>
);

export default App;