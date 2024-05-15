import React, { Component } from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    handleButtonClick = () => {
        console.log('Close button has been clicked');
    };

    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    }

    render() {
        const { displayDrawer, listNotifications = [] } = this.props;

        
        return (
            <>
                <div className="menuItem">Your notifications</div>
                {displayDrawer && (
                    <div className="Notifications">
                        <button type="button" style={{ float: 'right' }} aria-label='Close' onClick={this.handleButtonClick}>X</button>
                        <p>Here is the list of notifications</p>
                        <ul>
                        {listNotifications.length === 0 ? (
                            <li>No new notifications for now</li>
                        ) : (
                        listNotifications.map(notification => (
                            <NotificationItem key={notification.id} {...notification} markAsRead={this.markAsRead} />
                        ))
                        )}
                        </ul>
                    </div>
                )}
            </>
        );
    }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
};

export default Notifications;