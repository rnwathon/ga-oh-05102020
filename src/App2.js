import React, {useState, useEffect} from 'react';

// State
// Props
// Lifecycle
// - ComponentDidMount
// - ComponentDidUpdate
// - ComponentWillUnmount

function App2(props){
  let [data, setData] = useState("")

  // ComponentDidMount
  // useEffect(() => {
  //   console.log(props.location.state.data, "DATA")
  //   // if(props.location.state && props.location.state.data){
  //   //   setData(props.location.state.data)
  //   // }
  // }, [])

  return(
    <React.Fragment>
      <button className="btn btn-primary" onClick={() => props.history.goBack()}>Back</button>
      <h1>{data}</h1>
    </React.Fragment>
  )
}

export default App2;
