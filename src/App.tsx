import './styles/global.css';
import { TextInput } from './components/TextInput';
import { Envelope } from 'phosphor-react';

export function App() {
  return (
    <>
      <TextInput.Root children={
        [
          <TextInput.Icon>
          <Envelope />
          </TextInput.Icon>,
          <TextInput.Input placeholder='johndoe@example.com' />
        ]
      } />
    </>
  )
}

