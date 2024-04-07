"use client";

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link';

export default function SignupPage() {

  const router = useRouter()

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: ""
  })

  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSignup = async () => {
    try {
      setLoading(true)
      const response = await axios.post("/api/users/signup", user)
      console.log("Signup success",response.data)
      router.push('/login')

    } catch (error:any) {
        console.log("Signup failed")
        toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
      setButtonDisabled(false)
    }else{
      setButtonDisabled(true)
    }
  },[user])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>{loading ? "Processing": "Signup"}</h1>
      <hr />
      <label htmlFor="username" className='mt-3'>username</label>
      <input 
      id='username'
      value={user.username}
      onChange={(e) => setUser({...user,username: e.target.value})}
      placeholder='username'
      type="text" 
      className='text-black w-1/3 h-10 rounded-md px-4'/>

      <label htmlFor="email" className='mt-3'>email</label>
      <input 
      id='email'
      value={user.email}
      onChange={(e) => setUser({...user,email: e.target.value})}
      placeholder='email'
      type="email" 
      className='text-black w-1/3 h-10 rounded-md px-4'/>

      <label htmlFor="password" className='mt-3'>password</label>
      <input 
      id='username'
      value={user.password}
      onChange={(e) => setUser({...user,password: e.target.value})}
      placeholder='password'
      type="password" 
      className='text-black w-1/3 h-10 rounded-md px-4'/>

      <button 
      onClick={onSignup}
      className='mt-4 outline outline-1 p-2 rounded-lg
      focus:border-gray-400'
      >
        {buttonDisabled ? "No signup" : "Signup"}
      </button>

      <Link href="/login">Go to login page</Link>
    </div>
  )
} 

