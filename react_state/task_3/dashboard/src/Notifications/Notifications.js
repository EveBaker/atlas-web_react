import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

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
    cursor: 'pointer',
    ':hover': {
      animationName: 'bounce',
      animationDuration: '0.5s, 1s',
      animationIterationCount: '3',
    },
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

class Notifications extends PureComponent {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.props.handleHideDrawer();
  }

  render() {
    const { displayDrawer, listNotifications = [], handleDisplayDrawer, markNotificationAsRead } = this.props;

    return (
      <>
        <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>Your notifications</div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              type="button"
              className={css(styles.closeButton)}
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
                    markAsRead={() => markNotificationAsRead(notification.id)}
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
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
};

export default Notifications;
