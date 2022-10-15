import './styles/global.css';
import { SignIn } from './pages/SignIg';


export interface SignInProps {}


export function App(props :SignInProps) {
    return (
       <div>
        <SignIn />
       </div>
    )
}