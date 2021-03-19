import React from 'react'

import { useDispatch } from 'react-redux'
import GoogleLogin from 'react-google-login'
import axios from 'axios'

import './GoogleAuth.scss'
import { Link, useHistory } from 'react-router-dom'
import { logUser } from '../../redux/actions/user'

const GoogleAuth = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const responseGoogle = async (response: any) => {
    console.log(response)
    const res = await axios.post('http://localhost:5001/google/login', {
      id_token: response.tokenObj.id_token,
    })
    const user = {
      name: res.data.user.name,
      email: res.data.user.email,
      token: res.data.token,
    }
    dispatch(logUser(user))
    history.push('/')
  }

  // export type User = {
  //   name: string
  //   email: string
  //   token: string
  // }

  return (
    <div className="auth">
      <Link to="/" className="auth__logo">
        LOGO
      </Link>
      <div className="auth__container">
        <div className="auth__container__inputs">
          <h2>Sign In/Register</h2>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" />
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" />
          <button>Continue</button>
        </div>
        <div className="auth__container__googleBtn">
          <GoogleLogin
            // style={{ borderRadius: '20px' }}
            className="gBtn"
            clientId="802218960288-lhsmrni7jus9b7hrjgs5eb327qg77409.apps.googleusercontent.com"
            buttonText="Login With Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </div>
    </div>
  )
}

export default GoogleAuth
