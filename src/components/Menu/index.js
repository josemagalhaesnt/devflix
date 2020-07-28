import React from 'react';
import Logo from '../../assets/img/logo.png';

import { Container } from './styles';
import Button from '../Button';

const Menu = () => {
    return (
        <Container className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="DevFlix Logo" />
            </a>
            <Button as="a" className="Button" link="/">
                Novo vídeo
            </Button>
        </Container>
    );
};

export default Menu;
