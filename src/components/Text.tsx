import { Slot } from '@radix-ui/react-slot';
import {clsx} from 'clsx'
import { ReactNode } from 'react';


export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    color: 'light' | 'less-light';
    children: ReactNode;
    asChild?: Boolean;
}

export function Text({size = 'md', color= 'light', children, asChild}: TextProps) {

    const Comp = asChild ? Slot : 'span'

    return (
        <Comp className={
            clsx(
                "font-sans",
                {
                    'text-gray-200': color === 'less-light',
                    'text-gray-100': color === 'light',
                },
                {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg'
                }
            )
        }
        >
            {children}
        </Comp>
    ) 
}