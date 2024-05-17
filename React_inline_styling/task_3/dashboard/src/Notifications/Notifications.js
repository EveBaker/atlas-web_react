import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    notifications: {
        border: '2px dotted #e1354b',
        padding: '6px 12px',
		position: 'absolute',
        width: '25%',
        backgroundColor: '#fff',
		marginTop: '-20px',
		fontSize: '20px',
        '@media (max-width: 900px)': {
			position: 'absolute !important',
            top: -18,
            left: -10,
            width: '100%',
            height: '100%',
            backgroundColor: '#fff',
            zIndex: 1000,
            fontSize: '20px',
      },
    },
    menuItem: {
      textAlign: 'right',
      fontWeight: 'bold',
    },
    notificationText: {
        fontWeight: 'bold',
        fontSize: '20px',
      },
      notificationItem: {
        fontSize: '20px',
      },
      closeButton: {
        float: 'right',
        fontSize: '20px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
      },
      ul: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
      }
  });

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
                <div className={css(styles.menuItem)}>Your notifications</div>
                {displayDrawer && (
                    <div className={css(styles.notifications)}>
                        <button
                            type="button"
                            className={css(styles.closeButton)}
                            style={{ float: 'right' }}
                            aria-label='Close'
                            onClick={this.handleButtonClick}
                        >
                            X
                        </button>
                        <p className={css(styles.notificationText)}>Here is the list of notifications</p>
                        <ul className={css(styles.ul)}>
                            {listNotifications.length === 0 ? (
                                <li className={css(styles.notificationItem)}>No new notifications for now</li>
                            ) : (
                                listNotifications.map(notification => (
                                    <NotificationItem
                                        key={notification.id}
                                        {...notification}
                                        markAsRead={this.markAsRead}
                                    />
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