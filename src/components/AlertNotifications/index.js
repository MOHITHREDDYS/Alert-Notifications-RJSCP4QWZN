// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const alertNotificationsList = [
  {
    id: 1,
    icon: <AiFillCheckCircle className="success-icon success-color" />,
    text: 'Success',
    description: 'You can access all the files in the folder',
    color: 'success-color',
  },
  {
    id: 2,
    icon: <RiErrorWarningFill className="error-icon error-color" />,
    text: 'Error',
    description:
      'Sorry, you are not authorized to have access to delete the file',
    color: 'warning-color',
  },
  {
    id: 3,
    icon: <MdWarning className="warning-icon warning-color" />,
    text: 'Warning',
    description: 'Viewers of this file can see comments and suggestions',
    color: 'warning-color',
  },
  {
    id: 4,
    icon: <MdInfo className="info-icon info-color" />,
    text: 'Info',
    description: 'Anyone on the internet can view these files',
    color: 'info-color',
  },
]

class AlertNotifications extends Component {
  render() {
    return (
      <div className="notifications-main-container">
        <div className="notifications-container">
          <h1 className="notifications-heading">Alert Notifications</h1>
          <ul className="alert-notifications-list-container">
            {alertNotificationsList.map(eachNotification => (
              <Notification key={eachNotification.id}>
                {eachNotification.icon}
                {eachNotification.text}
                {eachNotification.description}
                {eachNotification.color}
              </Notification>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default AlertNotifications
