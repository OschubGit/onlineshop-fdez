import { SimpleButton, FancyButton, SubmitButton, DarkButton } from "./Button.styles"
import PropTypes from "prop-types";

const Button = ({variant, disabled, children, color, ...restProps}) => {
    return ( 
        <SimpleButton color={color} variant={variant} disabled={disabled} {...restProps}>{children}</SimpleButton>
    )
}

Button.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    color: PropTypes.string,
}
Button.defaultProps = {
    variant: null,
    children: null,
    disabled: false,
    color: PropTypes.string,
}

export default Button
export {SimpleButton, FancyButton, SubmitButton, DarkButton}