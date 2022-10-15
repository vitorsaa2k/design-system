import { Checkbox } from "../components/CheckBox";
import { Envelope } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Logo } from "../components/Logo";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import {Lock} from 'phosphor-react'


export interface SignInProps {}


export function SignIn() {
    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center bg-gray-900'>
      <header className='flex flex-col items-center justify-center'>
        <Logo />

        <Heading className='mt-4' size='lg' >
          Ignite Lab
        </Heading>

        <Text className='text-gray-400 mb-10' size='lg'>
          Faça login e comece a usar!
        </Text>
      </header>

      <form className='items-stretch flex flex-col gap-y-4 w-full max-w-sm'>
        
        <label className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type={"email"} placeholder='Digite seu endereço de e-mail'></TextInput.Input>
          </TextInput.Root>
        </label>

        <label className='flex flex-col gap-3'>
          <Text className='font-semibold'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type={"password"} placeholder='*******'></TextInput.Input>
          </TextInput.Root>
        </label>

        <label className='mb-8 flex gap-2 items-center '>
          <Checkbox />
          <Text size='sm'>Lembrar de mim por 30 dias</Text>
        </label>

        <Button>Entrar na plataforma</Button>

      </form>

        <footer className='mt-8 flex flex-col gap-4 items-center justify-center'>
          <Text asChild size='sm' className='hover:cursor-pointer'>
          <a className='text-gray-400 hover:text-gray-200 underline'>Esqueceu sua senha?</a>
          </Text>
          <Text asChild size='sm' className='hover:cursor-pointer'>
          <a className='text-gray-400 hover:text-gray-200 underline'>Não possui uma conta? Crie uma agora!</a>
          </Text>
        </footer>

    </div>
    )
}