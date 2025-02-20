import React from 'react'
import useAuthStore from '../store/useAuth'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const{login} = useAuthStore()
  const navigate = useNavigate()
  async function handleLogin(){
    await login()
    navigate('/home')
  }

  return (
    <div>
      <button onClick={()=>handleLogin()}>Login</button>
    </div>
  )
}
