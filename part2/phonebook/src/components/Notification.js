import React from 'react'
import './Notification.css'

const Notification = ({ message, showMessage }) => {
    if(message === null) {
        return null
    }

    // let hidden = true

    return (
        <div className="error" hidden={showMessage}>
            {message}
        </div>
    )
}

export default Notification