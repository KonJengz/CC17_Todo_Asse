import { Link } from 'react-router-dom'
import './contentCard.css'
import { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate()
  const { loginWeb } = useContext(AuthContext)

  const [login, setLogin] = useState({
    email: '',
    password: ''
  })

  // setLogin Stage Input
  const handleChangeUsername = (e) => {
    setLogin((prev) => ({...prev, 'email': e.target.value}))
  }

  const handleChangePassword = (e) => {
    setLogin((prev) => ({...prev, 'password': e.target.value}))
  }

  // handle Click
  const handleClickLogin = async () => {
    const isLogin = await loginWeb(login)
    if (isLogin) {
      navigate('/')
    } else {
      alert('ใส่ข้อมูลไม่ถูกต้อง')
    }
  }

  return (
    <div className="container_content">
        <div className='card_content'>
            <h1>Welcome</h1>
            <form action="#">
              <div className='input'>
                <input
                  type="text"
                  placeholder="Email"
                  onChange={handleChangeUsername}
                  value={login.email}
                />
              </div>

              <div className='input'>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={handleChangePassword}
                  value={login.password}
                />
              </div>
                <button onClick={handleClickLogin}>Login</button>
            </form>
            <Link to='/signup'>sign up</Link>
        </div>
    </div>
  )
}
