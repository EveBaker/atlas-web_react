import React from "react";
import PropTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
    handleClick = () => {
      this.props.markAsRead(this.props.id);
    };
  
    render() {
      const { type, html, value } = this.props;
  
      if (html) {
        return <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={this.handleClick} />;
      }
      return <li data-notification-type={type} onClick={this.handleClick}>{value}</li>;
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