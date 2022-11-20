// Write your code here
import {Component} from 'react'
import {GrFormClose} from 'react-icons/gr'
import './index.css'

class Notification extends Component {
  render() {
    const {children} = this.props
    console.log(children)

    return (
      <li className="notification-item">
        {children}
        <GrFormClose className="close-icon" />
      </li>
    )
  }
}

export default Notification
