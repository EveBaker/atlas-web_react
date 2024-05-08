import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

const Notifications = ({ displayDrawer, listNotifications = [] }) => {
    const handleButtonClick = () => {
        console.log('Close button has been clicked');
    };

    return (
        <>
            <div className="menuItem">Your notifications</div>
            {displayDrawer && (
                <div className="Notifications">
                    <button type="button" style={{ float: 'right' }} aria-label='Close' onClick={handleButtonClick}>X</button>
                    <p>Here is the list of notifications</p>
                    <ul>
                    {listNotifications.length === 0 ? (
                        <li>No new notifications for now</li>
                    ) : (
                    listNotifications.map(notification => (
                        <NotificationItem key={notification.id} {...notification} />
                    ))
                    )}
                    </ul>
                </div>
            )}
        </>
    );
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
};

export default Notifications;
