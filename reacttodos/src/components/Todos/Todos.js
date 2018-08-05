import React, { Component }  from 'react'
import AddTodo from '../AddTodo/AddTodo'
import './Todos.css'

class Todos extends Component {
  render() {
    return (
      <main className="Todos">
        <AddTodo />
      </main>
    )
  }
}

export default Todos
