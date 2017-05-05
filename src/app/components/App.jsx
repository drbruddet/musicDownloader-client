import React from 'react'

export default class App extends React.Component {

  componentDidMount() {
    fetch('http://127.0.0.1:3000/').then(function(response) {
      console.log(response);
    }).catch(function(error) {
      console.log('Request failed', error)
    })
  }

  render() {
    return (
     <div>
       <h1>MAIN APP PAGE</h1>
     </div>)
  }
}
