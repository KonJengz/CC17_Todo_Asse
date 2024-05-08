import { useState } from 'react'
import './contentCard.css'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Signup() {

  const navigate = useNavigate()
  const { register } = useContext(AuthContext)

  const [isError, setIsError] = useState(null)
  const [createUser, setCreateUser] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: 'KonJeng',
    number: 45

  })

  const [errorMessage, setErrorMessage] = useState({
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
    register: ''
  })

  // Hand Change
  const handleChangeEmailOrMobile = (e) => {
    setCreateUser((prev) => ({...prev,"email": e.target.value}))
    setErrorMessage((prev) => ({...prev,'emailError': ""}))
    setIsError(false)
  }

  const handlePassword = (e) => {
    setCreateUser((prev) => ({...prev,"password": e.target.value}))
    setErrorMessage((prev) => ({...prev,'passwordError': ""}))
    setIsError(false)
  }

  const handleConfirmPassword = (e) => {
    setCreateUser((prev) => ({...prev,"confirmPassword": e.target.value}))
    setErrorMessage((prev) => ({...prev,'confirmPasswordError': ""}))
    setIsError(false)
  }

  // validate
  const ckeckError = () => {

    let ierror = false
    if (!createUser.email.includes('@') || createUser.email === ''){
      setErrorMessage((prev) => ({...prev,'emailError': "Email is invalid"}))
      ierror = true
    }

    if (!(createUser.password < 8 || createUser.password > 12) || createUser.password === ''){
      setErrorMessage((prev) => ({...prev,'passwordError': "Chrector 8-12"}))
      ierror = true
    }

    if (createUser.confirmPassword !== createUser.password || createUser.confirmPassword === ''){
      setErrorMessage((prev) => ({...prev,'confirmPasswordError': "Confirm Email is not match Email"}))
      ierror = true
    }
    return ierror
  }

  // Handle Click Sign up
  const handClickRegister = async () => {
    if ( !ckeckError() ) {
      setErrorMessage((prev) => ({...prev,'register': "Register success"}))
      await register(createUser)
      navigate('/login')
    }
    
  }


  return (
    <div className="container_content">
        <div className='card_content'>
            <h1>Register</h1>
            
            <div className='input'>
              <input
                  onChange={handleChangeEmailOrMobile}
                  type="text"
                  placeholder="Email"
                  value={createUser.email}
                />
                <small>{errorMessage.emailError}</small>
            </div>
                
            <div className='input'>
                <input
                  onChange={handlePassword}
                  type="password"
                  placeholder="Password"
                  value={createUser.password}
                />
                <small>{errorMessage.passwordError}</small>
              </div>

              <div className='input'>
                <input
                  onChange={handleConfirmPassword}
                  type="password"
                  placeholder="Confirm Password"
                  value={createUser.confirmPassword}
                />
                <small>{errorMessage.confirmPasswordError}</small>
              </div>

              <div className='input'>
                <button onClick={handClickRegister}>Sign up</button>
                <small className='success'>{errorMessage.register}</small>
              </div>
        </div>
    </div>
  )
}
