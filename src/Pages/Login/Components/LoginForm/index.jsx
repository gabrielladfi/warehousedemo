
import { useContext } from 'react'
import './loginform.scss'
import { LoginState } from '../../Context/LoginContext'
import Logo from '../../../../Components/Atoms/Logo'

function LoginForm() {

    const {
        getDataForm,
        LoginFn
    } = useContext(LoginState)

    return (
        <>
            <form className='form-login'>
                <Logo />
                <div className='form-login__div-title'>
                    <h1>Welcome Back!</h1>
                    <p className='form-login__div-title__p'>Please enter your details</p>

                </div>
                
                <div className='form-login__div-user'>
                    <label className='form-login__div-user__label' htmlFor="">User</label>
                    <input name='username' onChange={getDataForm} className='form-login__div-user__input' type="text" />
                </div>
                <div className='form-login__div-password'>
                    <label className='form-login__div-password__label' htmlFor="">Password</label>
                    <input name='password' onChange={getDataForm} className='form-login__div-password__input' type="password" />
                </div>
                <button onClick={LoginFn} className='form-login__button' type='button'>Log In</button>
            </form>
        </>
    )
}

export default LoginForm
