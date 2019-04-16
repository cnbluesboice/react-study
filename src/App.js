import React, { Component } from 'react';
import {Router, Route, Link} from "react-router-dom"
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={}
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <div className="aside">
          <ul className="asideUl">
            {/* <li><Link to="">我是侧边栏1</Link></li>- */}
            <li onclick={()=>{this.goAbout()}}><a>我是侧边栏2</a></li>
            <li><a>我是侧边栏3</a></li>
          </ul>
        </div>
        <header className="header">我是头部！</header>
      </div>
    );
  }

  goAbout=()=>{
    this.props.history.push("/about")
  }
}

export default App;
