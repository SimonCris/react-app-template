import React, {Component} from 'react';
import './App.css';
import Clock from './Clock';

const clocksList = [
    {
        country: 'Italy',
        timezone: 0
    },
    {
        country: 'Russia',
        timezone: 2
    },
    {
        country: 'Cuba',
        timezone: -6
    }
];

class App extends Component{
    /** React Fragment si usa quando si vuole inserire un tag fuori dal tag
     * padre obbligatorio. In questo caso h2 è fuori dal tag padre App */
  render () {
      return <React.Fragment>
                <div className="App">
                  <h1 className="TitleMessage">My React App</h1>
                </div>
                <ul>
                    {this.getClocksList()}
                </ul>
              </React.Fragment>
    }

    getClocksList() {
      return clocksList.map(clock => {
         return <Clock country={clock.country} timezone={clock.timezone}></Clock>

      });
    }

}

export default App;
