import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
  }

  deleteUser = id => {
    const {todosList} = this.state
    const filteredList = todosList.filter(
      eachTodoItem => eachTodoItem.id !== id,
    )

    this.setState({todosList: filteredList})
  }

  render() {
    const {todosList} = this.state

    return (
      <div className="main-bg-container">
        <div className="todos-bg-container">
          <h1 className="todos-heading">Simple Todos</h1>
          <ul className="todo-list">
            {todosList.map(eachTodo => (
              <TodoItem
                todoDetails={eachTodo}
                key={eachTodo.id}
                deleteUser={this.deleteUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
