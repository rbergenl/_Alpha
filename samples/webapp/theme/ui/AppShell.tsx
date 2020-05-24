import styled from 'theme';

const AppShell = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 0%;
    flex-grow: 1;
    flex-shrink: 1;

    bottom: 0px;
    top: 0px;
    left: 0px;
    right: 0px;
    position: absolute;

    background-color: ${props => props.theme.background.primary};
    color: ${props => props.theme.text.default};

    main {
        margin-bottom: auto;
        overflow: auto;
        padding: 1em;
    }
`;

export default AppShell;
