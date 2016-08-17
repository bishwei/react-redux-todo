import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;

  const onSubmit = () => (event) => {
    const { value } = input;
    event.preventDefault();

    if (!value.trim()) {
      return;
    }

    dispatch(addTodo(value));
    input.value = '';
  };

  return (
    <div>
      <form onSubmit={onSubmit()}>
        <input ref={ref => { input = ref; }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
