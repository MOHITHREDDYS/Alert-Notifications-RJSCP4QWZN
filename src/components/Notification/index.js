// Write your code here
import {Component} from 'react'
import {GrFormClose} from 'react-icons/gr'
import './index.css'

class Notification extends Component {
  render() {
    const {children} = this.props

    return (
      <li className="notification-item">
        {children[0]}
        <div className="alert-type-description-container">
          <h1 className={`alert-type ${children[3]}`}>{children[1]}</h1>
          <p className="alert-description">{children[2]}</p>
        </div>
        <GrFormClose className="close-icon" />
      </li>
    )
  }
}

export default Notification
