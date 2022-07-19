import styled from 'styled-components'

export const SimpleButton = styled.button`
    background-color: ${(props)=> props.variant === "primary" ? "transparent" : "greenyellow"};
    color: ${(props)=> props.variant === "primary" ? "white" : "black"};
    border: ${(props) => props.disabled === true && "1px solid black"};
    border-radius: 3px;
    padding: 12px;
    text-align: center;
    cursor: pointer;
    transition: 0.2s all ease-in;
    &:hover {
        background-color: ${(props)=> props.variant === "primary" ? "#adff2fad" : "#adff2fad"};
        color: ${(props)=> props.variant === "primary" ? "white" : "black"};
    }
`

export const FancyButton = styled(SimpleButton)`
    background-image: linear-gradient(to right, greenyellow 0%, yellow 100%);
    border: none;
    color: black;
    &:hover {
        background-image: linear-gradient(to left, greenyellow 0%, yellow 100%);
        color: ${(props)=> props.variant === "primary" ? "black" : "black"};
    }
`

export const SubmitButton = styled(SimpleButton).attrs((props) => ({
    type: "submit",
}))`
    box-shadow: 0 9px #999;
    &:active {
        background-color: ${(props)=> props.variant !== "primary" ? "transparent" : "greenyellow"};
        box-shadow: 0 5px #666;
        transform: translateY(4px)
    }
`

export const DarkButton = styled(SimpleButton)`
    border: 2px solid ${(props) => props.theme.dark.primary};
    background-color: ${(props) => props.theme.dark.primary};
    color: ${(props) => props.theme.dark.text};
`
