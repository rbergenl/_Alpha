import React from 'react';
import styled from 'theme';

const StyledTabNavigator = styled.div`
    display: flex;
    text-align: center;
    border-radius: 3px;
    background-color: ${props => props.theme.background.default};
    color: ${props => props.theme.text.default};
    border: 2px solid ${props => props.theme.text.primary};
    a {
        flex-grow: 1;
        height: 50px;
        padding: 0.5rem;
    }
    img {
        height: 100%;
    }
`;

function TabNavigator({ children }: any) {
    return (
        <StyledTabNavigator>
            { children }
        </StyledTabNavigator>
    )
}

export default TabNavigator;
