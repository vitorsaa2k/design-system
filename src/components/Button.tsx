import { Slot } from '@radix-ui/react-slot';
import {clsx} from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react';


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: Boolean;
}

export function Button({children, asChild, className, ...props}: ButtonProps) {

    const Comp = asChild ? Slot : 'button'

    return (
        <Comp className={
            clsx(
                "bg-cyan-500 rounded text-black font-semibold text-sm px-4 py-3 w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white",
                className,
            )
        }
        {...props}
        >
            {children}
        </Comp>
    ) 
}