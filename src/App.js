import React from 'react';
import './App.css';
import Clock from './Clock';

const h2Element = <h2>Testo di Prova</h2>;

function App() {
    /** React Fragment si usa quando si vuole inserire un tag fuori dal tag
     * padre obbligatorio. In questo caso h2 è fuori dal tag padre App */
  return (
      <React.Fragment>
        <div className="App">
          <h1 className="TitleMessage">My React App</h1>
        </div>
        {h2Element}
        <Clock country="Italy" timezone="0"></Clock>
        <Clock country="Russia" timezone="2"></Clock>
        <Clock country="Cuba" timezone="-6"></Clock>
      </React.Fragment>
  );
}

export default App;
