import React from 'react';
import './App.css';
import Greeter from './Greeter/Greeter.react';
import ShowDonors from './ShowDonors/ShowDonors.react';

function App() {
  return (
    <div className="App">
      <Greeter/>
      <ShowDonors></ShowDonors>
    </div>
  );
}

export default App;
