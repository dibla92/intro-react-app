import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        const obj = {}
        // this.toggleWatch = this.toggleWatch.bind(this);
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
    return <li> In { this.props.country } is <br/>
    <span className="clock">{ data.toLocaleTimeString() } </span><br/>
    <button onClick={this.toggleWatch}>{this.state.stopped ? 'Start' : 'Stop'}</button>
    </li>
    }

    toggleWatch = (e) => {
        this.setState((state, props) => {
            state.stopped ? this.startWatch() : clearInterval(this.interval);
            return {stopped: !state.stopped};
        })
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

    startWatch() {
        this.interval = setInterval(this.tick, this.props.secs*1000);
    }

    componentDidMount() {  //componente montato nel DOM
        console.log(' component did update');
        this.startWatch();
    }

    componentWillUnmount() { //chiamato quando il componente è smontato
        clearInterval(this.interval);
    }


}

export default Clock;