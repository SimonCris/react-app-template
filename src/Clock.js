import React, {Component} from 'react';

class Clock extends Component {

    /** Lo stato del componente deve essere inizializzato solamente nel costruttore del componente */
    constructor(props) {
        super(props);
        this.state = {
            date: Date.now(),
            timezone: this.props.timezone * 3600 * 1000,
            country: this.props.country,
            stopped: false
        }
    }

    /** Questo metodo renderizza il componente sul browser e viene chiamato automaticamente
     * da React */
    render() {

        const dateFromState = new Date(this.state.date);
        const minusTime = dateFromState.getTime() + this.state.timezone;
        const finalDate = new Date(minusTime);

        return <li> In {this.state.country} is <br/>
                    <span className="clock"> {finalDate.toLocaleTimeString()} </span> <br/>
                    <button onClick={this.toogleWatch}>
                        {this.state.stopped ? 'Start' : 'Stop'}
                    </button>
               </li>;

    }

    /** Avvia o interrompe il timer */
    toogleWatch = (event) => {
        this.setState((previousState) => {
            /** Check e modifica del valore 'stopped' dello state */
           previousState.stopped ? this.startWatch() : clearInterval(this.clockViewInterval);
           return {
               stopped: !previousState.stopped
           }
        });
    };

    tick = () => {

        /** Tramite setState possiamo cambiare lo stato della proprietà che ci interessa
         * lasciando invariate le altre. setState richiama automaticamente il metodo render()
         * dopo che le proprietà vengono modificate.
         * Utilizzando una funzione anonima che prende in input lo stato precedente, possiamo
         * aggiornare i campi dello stato a partire dai valori dello stato precedente
         * (in questo caso aggiorniamo la data a partire dalla precedente) */
        this.setState( (previousState, props) => {
            return {
                date: previousState.date + 1000
            }
        });
    };

    startWatch() {
        /** L'intervallo legato al cambio dell'ora viene registrato con 'clockViewInterval' e
         * quando il componente viene distrutto, viene eliminato da 'clearInterval' */
        this.clockViewInterval = setInterval(this.tick, 1000);
    }

    /** Questo metodo viene chiamato automaticamente da React subito dopo che il componente
     * è stato creato */
    componentDidMount() {
        this.startWatch();
    }

    /** Questo metodo viene chiamato automaticamente da React quando il componente viene distrutto */
    componentWillUnmount() {

        /** ClearInterval è un metodo di ReactDOM che permette di terminare tutti gli
         * interval che sono stati attivati dal componente */
        clearInterval(this.clockViewInterval);
    }

}

export default Clock;
