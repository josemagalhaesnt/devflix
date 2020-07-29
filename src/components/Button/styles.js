import styled from 'styled-components';

export const Container = styled.button`
    background: transparent;
    border: 1px solid var(--white);
    border-radius: 4px;
    color: var(--white);
    font-size: 16px;
    font-weight: bold;
    padding: 16px 24px;
    text-decoration: none;
    transition: opacity 0.3s;

    &:hover,
    &:focus {
        opacity: 0.5;
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
    }
`;
