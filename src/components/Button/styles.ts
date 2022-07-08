import styled from "styled-components";

interface ButtonProps {
    activeColor: "default" | "success" | "info" | "warning" | "error";
};

const colors = {
    default: "#33CC95",
    success: "#28a745",
    info: "#007bff",
    warning:"#ffc107",
    error: "#dc3545"
};

export const Btn = styled.button<ButtonProps>`
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: ${(props) => colors[props.activeColor]};
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
`;