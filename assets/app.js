/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import ReactDom from 'react-dom';

import React, { Component } from 'react'
import TodoContextProvider from './context/TodoContext';
import TodoTable from './components/TodoTable';

export default class App extends Component {
  render() {
    return (
      <TodoContextProvider>
            <TodoTable/>
      </TodoContextProvider>
    )
  }
}

ReactDom.render(<App/>,document.getElementById('root'));
