import React from 'react';


export class Clock extends React.Component {
  interval;
    constructor(props) {
        super(props);      
        this.state = {time: this.getTime(this.props.clock.zone)};
        this.interval  = 0;    
    }

    getTime(zone) {
        const currentZone = (new Date()).getTimezoneOffset() * 60000;
        const newZone = zone * 60 * 60 * 1000 + currentZone;
        return new Date((new Date()).getTime() + newZone).toLocaleTimeString();       
    }
    
    componentDidMount() {
        this.interval = setInterval(() => this.setState({time: this.getTime(this.props.clock.zone)}), 1000);
      }

      componentWillUnmount() {
        clearInterval(this.interval);
      }

    render() {
        return (
          <div className='clocksList'>
            <div className='clockItem'>
              <h5 className='title'>{this.props.clock.name}</h5>
              <button className='btnRemove' type="button" onClick={() => this.props.delClock(this.props.clock.id)}>X</button>
              <div className='clock-content'>{this.state.time}</div>
            </div>
          </div>
        )
    }
    
}
        
