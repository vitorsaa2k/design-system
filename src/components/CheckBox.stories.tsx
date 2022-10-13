import {Meta, StoryObj} from '@storybook/react'
import { Checkbox, CheckboxProps } from "./CheckBox";
import { Text } from './Text';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    decorators: [
        (Story) => {
            return (
                <div className='flex items-center gap-2'>
                    {Story()}
                    <Text color='less-light' size='sm'>Lembrar de mim por 30 dias</Text>
                </div>
            )
        }
    ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}