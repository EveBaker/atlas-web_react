import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultItem: {
    color: 'blue',
    '@media (max-width: 900px)' : {
      width: '100%',
      borderBottom: '1px soild black',
      fontSize: '20px',
      padding: '10px 8px',
    },
  },
  urgentItem: {
    color: 'red',
    '@media (max-width: 900px)': {
      width: '100%',
      borderBottom: '1px solid black',
      fontSize: '20px',
      padding: '10px 8px',
    },
  },
});

class NotificationItem extends React.PureComponent {
    handleClick = () => {
      this.props.markAsRead(this.props.id);
    };
  
    render() {
      const { type, html, value } = this.props;
      
      const style = type === 'urgent' ? styles.urgentItem : styles.defaultItem;

      if (html) {
        return <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={this.handleClick} className={css(style)}/>;
      }
      return <li data-notification-type={type} onClick={this.handleClick} className={css(style)}>{value}</li>;
    }
  }
  
  NotificationItem.propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string,
    html: PropTypes.shape({ __html: PropTypes.string }),
    value: PropTypes.string,
    markAsRead: PropTypes.func.isRequired
  };
  
  NotificationItem.defaultProps = {
    type: 'default'
  };
  
  export default NotificationItem;