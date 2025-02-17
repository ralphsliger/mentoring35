import React, { useState } from 'react'
import { connect } from 'react-redux';
import { fetchRandom } from '../actions';

const From = (props) => {// component stateless
  const [state, setState] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    props.dispatch(fetchRandom(state));
  };
  return <div>
    <form onSubmit={onSubmit} className='formFrom-container'>
      <label htmlFor="list">Ingresa una lista separada por comas:</label>
      <br />
      <textarea id="list" style={{ width: "300px", height: "120px" }} 
        onChange={(e) => setState(e.target.value)}
      ></textarea>
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


export default connect(stateMapToPros)(From)
