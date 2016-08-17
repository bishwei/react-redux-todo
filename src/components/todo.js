import React, { PropTypes } from 'react';

const Todo = ({ completed, onClick, text }) =>
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    { text }
  </li>;

Todo.displayName = 'Todo';
Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
