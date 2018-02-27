import React, { Component } from 'react';
import './App.css';

import MarkdownEditor from './editor'


// 程序的主入口
// class 是 es6 的语法
class App extends Component {
  render() {
    return (
      <div className="App">
        <MarkdownEditor />
      </div>
    )
  }

}

export default App;
