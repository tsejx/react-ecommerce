import React, { Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

const Icon = props => {
	// default mini small large
	return (
		<svg
			width={props.size}
			height={props.size}
			className={classNames('icon', `icon-${props.type}`)}
			style={props.style}
			aria-hidden="true"
		>
			<use xlinkHref={`#icon-${props.type}`} />
		</svg>
	);
};

Icon.defaultProps = {
	size: 24,
};

Icon.prototype = {
	type: PropTypes.string,
	style: PropTypes.object,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Icon;
