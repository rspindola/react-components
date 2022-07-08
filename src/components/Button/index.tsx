import {ReactNode} from 'react';
import { Btn } from './styles'

interface ButtonProps {
    children?: ReactNode;
    color: "default" | "success" | "info" | "warning" | "error";
}

export function Button({children, color}: ButtonProps) {
    return (
        <Btn activeColor={color}>{children}</Btn>
    )
}