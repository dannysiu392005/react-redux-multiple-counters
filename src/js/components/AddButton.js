import React from 'react';
import { add_counter } from '../actions/counters';
import { connect } from 'react-redux';

const AddButton = ({dispatch}) => (
  <button
  onClick={() => {
    dispatch(add_counter());
  }}>
    Add a counter
  </button>
);

export default connect()(AddButton);
