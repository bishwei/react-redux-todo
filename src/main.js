import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import AddTodo from './parent-components/add-todo';
import VisibleTodoList from './parent-components/visible-todo-list';

const App = () =>
  <div>
    <AddTodo />
    <VisibleTodoList />
  </div>;

let store = createStore(todoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
