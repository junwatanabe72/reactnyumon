import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

function mappingState(state){
  return state;
}

class App extends Component{

  constructor(props){
    super(props);
  }

render(){
  return (
    <div>
      <h1>Redux</h1>
      <Message />
      <Button />
    </div>
    );
  }
}
App = connect()(App);

class Message extends Component{
  style ={
    fontSize:"20pt",
    padding:"20px 5px"
  }
  render(){
    return(
      <p style={this.style}>
        {this.props.message}:{this.props.counter}
      </p>
    );
  }
}

Message = connect(mappingState)(Message);

class Button extends Component{
  style ={
    fontSize:"16pt",
    padding:"5px 10px"
  }
  constructor(props){
    super(props);
    this.doAction = this.doAction.bind(this);
  }
  doAction(e){
    if(e.shiftKey){
      this.props.dispatch({type:'DECREMENT'});
    }else{
      this.props.dispatch({type:'INCREMENT'});
    }
  }
  render(){
  return (
    <button style={this.style} onClick={this.doAction}>Click</button>
  );
  }
}
Button = connect()(Button);


export default App;

// class App extends Component{
//
//   msgStyle1 ={
//     fontSize:"24pt",
//     color:"#900",
//     margin:"20px 0px",
//     padding: "5px",
//     borderBottom:"2px solid #900"
//   }
//   msgStyle2 ={
//     fontSize:"20pt",
//     color:"white",
//     backgroundColor:"#900",
//     margin:"20px 0px",
//     padding: "5px",
//     borderBottom:"2px solid #900"
//   }
//
//   btnStyle={
//     fontSize:"20pt",
//     padding:"0px 10px"
//   }
//
//   constructor(props){
//     super(props);
//     this.state ={
//       counter:0,
//       msg:'count start!',
//       flg: true,
//     };
//     this.doAction = this.doAction.bind(this);
//   }
//
//   doAction(e){
//     this.setState((state)=>({
//       counter: state.counter +1,
//       msg: 'counter:' + state.counter,
//       flg: !state.flg
//     }));
//   }
//
// render(){
//   return (
//     <div>
//       <h1>React</h1>
//       { this.state.flg ?
//       <p style={this.msgStyle1}>{this.state.msg}</p>
//       :
//       <p style={this.msgStyle2}>{this.state.msg}です。</p>
//       }
//       <button style={this.btnStyle} onClick={this.doAction}>
//         Click
//       </button>
//     </div>
//   );
// }
// }
