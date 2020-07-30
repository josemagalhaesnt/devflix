import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.button`
    background: transparent;
    border: 1px solid var(--white);
    border-radius: 4px;
    color: var(--white);
    font-size: 16px;
    font-weight: bold;
    padding: 16px 24px;
    text-decoration: none;
    transition: all 0.3s;

    &:hover,
    &:focus {
        background-color: var(--white);
        color: var(--black);
    }

    @media (max-width: 800px) {
        background-color: var(--primary);
        color: var(--white);
        border: 0;
        border-radius: 0;
        bottom: 0;
        left: 0;
        right: 0;
        position: fixed;
        outline: 0;
        text-align: center;
        width: 100%;

        &:hover,
        &:focus {
            background-color: ${lighten(0.15, '#2a7ae4')};
            color: var(--white);
        }
    }
`;
