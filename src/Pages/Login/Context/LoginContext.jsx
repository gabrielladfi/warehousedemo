/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginState = createContext()


function LoginProvider({children}) {

    const navigate = useNavigate()

    const [ user, setUser ] = useState({username: '', password: ''})

    function LoginFn() {
        if(user.username === 'admin' && user.password === "admin") {
            navigate('/dashboard')
        }
    }



    

    function getDataForm({target}) {
        const {name, value} = target;
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <LoginState.Provider value={{
            getDataForm,
            LoginFn
        }}>
            {children}
        </LoginState.Provider>
    )
}

export { LoginState, LoginProvider}