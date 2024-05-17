import React,  { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={css(styles.BodySectionWithMargin)}>
				<BodySection {...this.props} />
			</div>
		);
	};
};

const styles = StyleSheet.create({
	BodySectionWithMargin: {
		marginBottom: '40px',
	},
});

BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node
};


BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default BodySectionWithMarginBottom;