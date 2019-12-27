import React from 'react';
import './App.css';

function App() {
    /** React Fragment si usa quando si vuole inserire un tag fuori dal tag
     * padre obbligatorio. In questo caso h2 è fuori dal tag padre App */
  return (
      <React.Fragment>
        <div className="App">
          <h1 className="TitleMessage">My React App</h1>
        </div>
          <h2>Testo di Prova</h2>
      </React.Fragment>
  );
}

export default App;
