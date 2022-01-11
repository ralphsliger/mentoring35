import React, { useState } from 'react'
import { connect } from 'react-redux';
import { fetchRandomNumber } from '../actions';
import '../index.css'

const NumbersForm = (props) => {// component stateless
  const [state, setState] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    props.dispatch(fetchRandomNumber(state));
  };

  return <div className='formNumber-container'>
    <form className="formNumber" onSubmit={onSubmit}>
      <label htmlFor="number1">Ingresa el número mínimo:</label>
      <br />
      <input id="number1" className='formNumber-input' type="number" min="0" max="100"
        onChange={(e) => setState({...state,number1: e.target.value})}>
      </input>
      <br/>
      <label htmlFor="number2">Ingresa el número máximo:</label>
      <br/>
      <input className='formNumber-input' id="number2" type="number" min="0" max="100"
        onChange={(e) => setState({...state,number2: e.target.value})}>
      </input>
      <br />
      <button className="formNumber-button" type="submit" disabled={props.loading}>
        Guardar
      </button>
    </form>
  </div>
}

const stateMapToPros = state => {
  return {
    loading: state.view.loading
  }
}

export default connect(stateMapToPros)(NumbersForm) 