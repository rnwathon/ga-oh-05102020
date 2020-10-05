import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from './App';
import App2 from './App2';
import 'bootstrap/dist/css/bootstrap.min.css';

class Index extends React.Component{
  state = {
    greeting: "Hello "
  }

  toggle = e => {
    e.preventDefault()
    let greeting = this.state.greeting === "Hello " ? "Halo " : "Hello "
    this.setState({
      greeting: greeting
    })
  }

  render(){
    return(
      <React.Fragment>
        <Router>
          {/* <Link to="/">App 1</Link>
          <Link to="/second">App 2</Link> */}
          <Route path="/" render={(props) =>  <App greeting={this.state.greeting} {...props}/>} exact/>
          <Route path="/second" component={App2} />
        </Router>
        <button onClick={this.toggle}> Toggle Me </button>
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);
