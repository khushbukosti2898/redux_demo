import React from 'react';
import './App.css';
import {reactVote , angularVote, vueVote} from './actions';
import {Row, Col} from 'react-bootstrap'
import Result from './components/results';


class App extends React.Component{
  constructor(props){
    super(props)
    this.store=this.props.store;
  }

  handleReactVote =() =>{
    this.store.dispatch(reactVote())
  }

  handleVueVote =() =>{
    this.store.dispatch(vueVote())
  }

  handleAngularVote =() =>{
    this.store.dispatch(angularVote())
  }
  
  
  render(){
    // console.log(this.state.store())
    return(<div>
      <div className="jumbotron App">
        <h2>What is your favorite front-end framework?</h2><br/>
        <Row>
          <Col md="4">
          <img src="angular_logo.png" height="100" alt="Angular" onClick={this.handleAngularVote}></img>
          </Col>
          <Col md="4">
          <img src="react_logo.png" height="100" alt="react" onClick={this.handleReactVote}></img>
          </Col>
          <Col md="4">
          <img src="vuejs_logo.png" height="100" alt="vue" onClick={this.handleVueVote}></img>
          </Col>
        </Row>
        <Row>
          <Col><Result store={this.store}/></Col>
        </Row>
      </div>
    </div>)
  }
}

export default App;
