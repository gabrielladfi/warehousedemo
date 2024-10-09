import LayoutFlex from '../../Components/Layouts/LayoutFlex'
import LoginForm from './Components/LoginForm'
import { LoginProvider } from './Context/LoginContext'
import coverimg from '../../assets/bodega.jpg'
import './login.scss'
import FootInfoLogin from './Components/FootInfoLogin'



function Login() {
    return (
        <>
            <LoginProvider>
                <LoginContent />
            </LoginProvider>
        </>
    )
}

function LoginContent() {
    return (
        <>
            <LayoutFlex>
                <div className='div-login-cover'>
                    <div className='div-login-cover__div-img'>
                        <img className='div-login-cover__div-img__img' src={coverimg} alt="" />
                    </div>
                    <div className='div-login-cover__div-form'>
                        <LoginForm />
                        <FootInfoLogin />
                    </div>
                </div>
            </LayoutFlex>
        </>
    )
}

export default Login
