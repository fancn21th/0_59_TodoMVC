import React, { Component } from 'react';
import './AddTodo.css'

class AddTodo extends Component {
  render() {
    return (
      <input className="AddTodo" type="text" placeholder="What needs to be done?"/>
    )
  }
}

export default AddTodo
