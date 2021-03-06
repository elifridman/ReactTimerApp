var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var CountDown = React.createClass({
  getInitialState:function(){
    return{
      count:0,
      countdownStatus:"stopped"
    };
  },
  componentDidUpdate:function(prevProps,prevState){
    if(this.state.countdownStatus !==prevState.countdownStatus){
      switch(this.state.countdownStatus){
        case 'stopped':
          this.setState({count:0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
        case 'started':
        this.startTimer();
          break;
      }
    }
  },
  startTimer:function(){
    this.timer = setInterval(() => {
      var newCount = this.state.count-1;
    this.setState({
      count:(newCount>=0)?newCount:0
    });
    if(newCount=== 0){
      this.setState({
        countdownStatus:'stopped'
      });
    }

    },1000);
  },
  handleSetCountdown:function(seconds,type){
    this.setState({
      count:seconds,
      countdownStatus:"started"
    });
  },
  handleStatusChange:function(newStatus){
    this.setState({
      countdownStatus:newStatus
    });
  },
  componentWillUnmount:function(){
    clearInterval(this.timer);
    this.timer = undefined;
    console.log('componentWillUnmount');
  },
  render:function(){
    var {count,countdownStatus} = this.state
    var renderControlArea = ()=>{
      if(countdownStatus!=="stopped"){
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
      }else{
        return <CountdownForm onSetCountDown = {this.handleSetCountdown}/>
      }
    }
    return(
      <div>
        <h1 className="page-title">Count Down App</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = CountDown;
