import styled, { VARIANTS, BASE_COLORS } from 'theme';

interface Props {
    variant?: VARIANTS;
}

const Button = styled.button<Props>`
    border: 1px solid ${BASE_COLORS.darkSkyBlue};
    background-color: ${props => props.theme.button[props.variant || VARIANTS.default]};
`;

export default Button;
