import styled from 'styled-components/native';
import { Variant } from '../../app';

interface Props {
    variant?: Variant;
}

const Button = styled.TouchableOpacity<Props>`

    padding-top: ${props => props.theme.button_padding_y_sm};
    padding-right: ${props => props.theme.button_padding_x_sm};
    padding-bottom: ${props => props.theme.button_padding_y_sm};
    padding-left: ${props => props.theme.button_padding_x_sm};
    border-radius: ${props => props.theme.button_border_radius_sm};

    background-color: ${props => props.variant === "primary" ? props.theme.brandPrimary : props.theme.brandSecondary};
    color: ${props => props.variant === "primary" ? props.theme.brandNeutral : props.theme.brandAccent};
    border: 1px solid ${props => props.variant === "primary" ? props.theme.brandPrimary : props.theme.brandSecondary};

`;

export default Button;
