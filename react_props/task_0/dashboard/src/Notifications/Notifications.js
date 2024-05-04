import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';

const Notifications = () => {
    const handleButtonClick = () => {
        console.log('Close button has been clicked');
    };

    return (
        <div className="Notifications">
            <button
                type="button"
                style={{float: 'right'}}
                aria-label='Close'
                onClick={handleButtonClick
                }>
                    X
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}/>
            </ul>
        </div>
    );
};

export default Notifications;