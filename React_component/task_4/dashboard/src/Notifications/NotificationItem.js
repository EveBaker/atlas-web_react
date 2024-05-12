import React from "react";
import PropTypes from 'prop-types';

const NotificationItem = ({ id, type, html, value, markAsRead }) => {
    const handleClick = () => {
        markAsRead(id);
    };

    if (html) {
        return <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={handleClick} />;
    }
    return <li data-notification-type={type} onClick={handleClick}>{value}</li>;
};

NotificationItem.propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string,
    html: PropTypes.shape({ __html: PropTypes.string }),
    value: PropTypes.string,
    markAsRead: PropTypes.func.isRequired
};

NotificationItem.defaultProps = {
    type: 'default',
    markAsRead: () => {}
};

export default NotificationItem;
