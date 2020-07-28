import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Button = ({ className, link, children }) => {
    return (
        <Container>
            <a className={className} href={link} rel="noopener noreferrer">
                {children}
            </a>
        </Container>
    );
};

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
    link: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};

export default Button;
