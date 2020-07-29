import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Button = ({ className, children }) => {
    return <Container className={className}>{children}</Container>;
};

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
    className: PropTypes.string.isRequired,
};

export default Button;
