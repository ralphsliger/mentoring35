import React, { Component } from 'react'
import From from '../components/From'
import Result from '../components/Result'
import NumbersForm from '../components/NumbersForm'
import NumbersResult from '../components/NumbersResult'

class App extends Component {// component stateful
  render() {
    return (
      <div>
        <h3 className='formNumber-container'>Lista Random
        <p>Sistema Ramdom - Demo</p>
        </h3>
        <NumbersForm />
        <From />
        <NumbersResult />

      </div>
    )
  }
}

export default App


