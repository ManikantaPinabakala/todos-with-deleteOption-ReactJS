import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  render() {
    const {todoDetails, deleteUser} = this.props
    const {title, id} = todoDetails
    const onDelete = () => {
      deleteUser(id)
    }

    return (
      <li className="todo-element">
        <p className="todo-title">{title}</p>
        <button className="delete-button" type="button" onClick={onDelete}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
