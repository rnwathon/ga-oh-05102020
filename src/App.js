import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { ListGroupItemHeading } from 'reactstrap';

// === Basic React === //
// State
// Props
// Lifecycle
// - ComponentDidMount
// - ComponentDidUpdate
// - ComponentWillUnmount

// === Class Based Component === //
// class App extends React.Component {
//   // State
//   state = {
//     name: "John"
//   }

//   // -- LifeCycle -- //
//   // ComponentDidMount
//   componentDidMount(){
//     console.log("== Component Did Mount ==")
//     this.fetch()
//   }

//   // ComponentDidUpdate
//   componentDidUpdate(prevProps, prevState){
//     console.log("== Component Did Update ==")
//   }

//   // ComponentWillUnmount
//   componentWillUnmount(){
//     console.log("== Component Will unMount ==")
//   }


//   render(){
//     console.log(this.state, "STATE")
//     return(
//       <React.Fragment>
//         <h1>{this.props.greeting} {this.state.name}</h1>
//         <input type="text" onChange={(e) => this.setState({ name: e.target.value})} />
//       </React.Fragment>
//     )
//   }
// }

// === Function Based Component === //
const App = (props) => {
  // State
  let [name, setName] = useState("")
  let [name2, setName2] = useState("")

  // LifeCycle
  // ComponentDidMount
  useEffect(() => {
    setTimeout(() => {
      setName("Rakhmat")
    }, 5000)
  }, [])

  // ComponentDidUpdate
  useEffect(() => {
    console.log("=== Component Did Update ===")
  }, [name])

  useEffect(() => {
    console.log("=== Component Did Update 2 ===")
  }, [name2])

  useEffect(() => {
    console.log("=== Component Did Update Props ===")
  }, [props.greeting])

  // ComponentWillUnMount
  useEffect(() => {
    return function(){
      console.log("=== Component Will UnMount ===")
    }
  }, [])


  // const redirect = () => {
  //   props.history.push({
  //     pathname: "/second",
  //     state: {
  //       data: name
  //     }
  //   })
  // }

  return(
    <React.Fragment>
      {/* <button className="btn btn-primary" onClick={redirect}>Go to App 2</button> */}
      <Link to={`/second/1`}> Go to App 2</Link>
      <h1>{props.greeting} {name ? name : "Loading..."}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} /> <br />
      <input type="text" onChange={(e) => setName2(e.target.value)} /> <br />
    </React.Fragment>
  )
}

export default App;
