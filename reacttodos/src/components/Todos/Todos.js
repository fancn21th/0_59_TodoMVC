import React, { Component }  from 'react'
import AddTodo from '../AddTodo/AddTodo'
import TodoList from '../TodoList/TodoList'
import './Todos.css'

class Todos extends Component {
  render() {
    return (
      <main className="Todos">
        <AddTodo />
        <TodoList />
      </main>
    )
  }
}

export default Todos
