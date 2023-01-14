import React from 'react';
import Card from './components/Card';
import data from './data';
import Navbar from './components/Navbar'; 

function App() {
  const card_data = data.map( el => {
    return (
      <>
      <Card
        key = {el.id}
        {...el}
      />
      <hr></hr>
      </>
    )
  })
  return (
    <div className="App">
      <Navbar></Navbar>
      {card_data}
    </div>
  );
}

export default App;
