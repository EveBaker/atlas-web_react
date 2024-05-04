import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

const Notifications = () => {
    const handleButtonClick = () => {
        console.log('Close button has been clicked');
    };

    return (
        <div className="Notifications">
            <button type="button" style={{float: 'right'}} aria-label='Close' onClick={handleButtonClick}>X</button>
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type="urgent" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
            </ul>
        </div>
    );
};

export default Notifications;