import React, { Component } from 'react';
import Form from './Form.js';
import List from './List.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();
    this.state.todo.push({title: e.target.title.value});
    this.setState({todo: this.state.todo})
    console.log(e);
  }

  handleRemove(i) {
    this.state.todo.splice(i, 1);
    this.setState({todo: this.state.todo});
  }

  render() {
    return (
      <div className="siimple-box siimple--bg-dark">
        <h1 className="siimple-box-title siimple--color-white">React ToDo App</h1>
        <Form handleAdd={this.handleAdd} />
        <div className="siimple-rule"></div>
        <List todos={this.state.todo} handleRemove={this.handleRemove} />
      </div>
    );
  }
}
