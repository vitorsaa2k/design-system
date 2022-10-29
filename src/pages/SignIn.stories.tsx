import {Meta, StoryObj} from '@storybook/react'
import {within, userEvent, waitFor} from "@storybook/testing-library"
import {expect} from '@storybook/jest'
import { SignIn, SignInProps } from "../pages/SignIg";
import {rest} from "msw"

export default {
    title: 'Pages/SignIn',
    component: SignIn,
    args: {},
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                rest.post('/sessions', (req, res, ctx) => {
                    return res(ctx.json({
                        message: 'Login Realizado!'
                    }))
                })
            ],
        },
    },
} as Meta<SignInProps>

export const Default: StoryObj<SignInProps> = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement)
        userEvent.type(canvas.getByPlaceholderText('Digite seu endereço de e-mail'), 'vitoradriel44@gmail.com')
        userEvent.type(canvas.getByPlaceholderText('*******'), '12345678')

        userEvent.click(canvas.getByRole('button'))
        waitFor(() => {
            return expect(canvas.getByText('Login Realizado!')).toBeInTheDocument()
        })
        
    }
}