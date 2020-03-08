import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        /*this.state = {
            date: new Date(),
            timezone: 1
        };*/
        this.state = {
            timestamp: Date.now(),
            date: new Date(),
            timezone: 1,
            stopped: false
        };
    }

    render() {
    const d = new Date(this.state.timestamp);
    const tempo = d.getTime() + this.props.timezone*1000*3600;

    // const tempo = this.state.date.getTime() + this.props.timezone*1000*3600;
    const data = new Date(tempo);
    return <h2> In { this.props.country } is { data.toLocaleTimeString() }
    <button>Stop</button>
    </h2>
    }

    tick = () => {
        // this.setState({
        //     date: new Date()
        // });
        this.setState((precState, props) => {
            return {
                timestamp: precState.timestamp + props.secs*1000
            }
        })
    };


    componentDidMount() {  //componente montato nel DOM
        console.log(' component did update');
        this.interval = setInterval(this.tick, this.props.secs*1000);
    }

    componentWillUnmount() { //chiamato quando il componente è smontato
        clearInterval(this.interval);
    }


}

export default Clock;