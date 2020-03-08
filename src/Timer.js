import React from 'react'

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().setHours(0,0,0,0),
            stopped: false
        };
    }

    render() {
    const prova = new Date(this.state.date)
    return <h2> Timer is { prova.toLocaleTimeString() }
    <button onClick={this.toggleWatch}>{this.state.stopped ? 'Start' : 'Stop'}</button>
    <button onClick={this.stopWatch}>Clear</button>
    </h2>
    }

    toggleWatch = (e) => {
        this.setState((state, props) => {
            state.stopped ? this.startWatch() : clearInterval(this.interval);
            return {stopped: !state.stopped};
        })
    }

    stopWatch = (e) => {
        this.setState((state, props) => {
            return {
                date: new Date().setHours(0,0,0,0)
            }
        }) 
    }

    tick = () => {
        this.setState((precState, props) => {
            return {
                date: precState.date + 1000
            }
        })
    };

    startWatch() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentDidMount() {  //componente montato nel DOM
        console.log(' component did update');
        this.startWatch();
    }

    componentWillUnmount() { //chiamato quando il componente è smontato
        clearInterval(this.interval);
    }


}

export default Timer;