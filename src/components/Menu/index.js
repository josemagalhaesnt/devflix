import React from 'react';
import Logo from '../../assets/img/logo.png';

import { MenuWrapper, LogoImage } from './styles';
import Button from '../Button';

const Menu = () => {
    return (
        <MenuWrapper className="Menu">
            <a href="/">
                <LogoImage src={Logo} alt="Devflix Logo" />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </MenuWrapper>
    );
};

export default Menu;
