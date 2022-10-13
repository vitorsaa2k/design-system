import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';




export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className="flex items-center rounded h-12 px-3 py-4 gap-3 bg-gray-800  focus-within:ring-2 ring-cyan-500">
            {props.children}
        </div>
    )
}

export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    )
    
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {

    return (
            <input
            className='bg-transparent flex-1 text-gray-100 outline-none text-xs placeholder:text-gray-400'
            {...props}
            >
            </input>
    ) 
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}