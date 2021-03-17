import React from 'react'
import GoogleLogin from 'react-google-login'
import axios from 'axios'

const GoogleAuth = () => {
  const responseGoogle = async (response: any) => {
    console.log(response)
    const res = await axios.post('http://localhost:5001/google/login', {
      id_token: response.tokenObj.id_token,
    })
    console.log(res.data)
  }

  return (
    <div>
      <GoogleLogin
        clientId="802218960288-lhsmrni7jus9b7hrjgs5eb327qg77409.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default GoogleAuth
