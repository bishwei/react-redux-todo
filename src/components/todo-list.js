import React, { PropTypes } from 'react';
import Todo from './todo';

const onClick = (onTodoClick, id) => () => {
  onTodoClick(id);
};

const TodoList = ({ todos, onTodoClick }) =>
  <ul>
    {todos.map(({ completed, id, text }) =>
      <Todo
        completed={completed}
        key={id}
        text={text}
        onClick={onClick(onTodoClick, id)}
      />
    )}
  </ul>;

TodoList.displayName = 'TodoList';

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
