import React from 'react'
import useAuthStore from '../store/useAuth'

export default function Home() {
  const{login,logout} = useAuthStore()
  return (
    <div>
      Home
      <button onClick={()=>logout()}>logout</button>
    </div>
  )
}
