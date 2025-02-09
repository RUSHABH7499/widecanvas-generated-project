
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaGoogle, FaEnvelope, FaLock } from 'react-icons/fa'
import { 
  auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  googleProvider 
} from '../firebase'

function Login() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleEmailAuth = async (e) => {
    e.preventDefault()
    setError('')

    if (isSignUp && password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password)
      } else {
        await signInWithEmailAndPassword(auth, email, password)
      }
      navigate('/profile')
    } catch (error) {
      setError(error.message)
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      navigate('/profile')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-mavani-blue">
        {isSignUp ? 'Create Account' : 'Welcome Back'}
      </h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          {error}
        </div>
      )}

      <form onSubmit={handleEmailAuth} className="space-y-4">
        <div className="flex items-center">
          <FaEnvelope className="mr-2 text-mavani-gray" />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="input-field" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>

        <div className="flex items-center">
          <FaLock className="mr-2 text-mavani-gray" />
          <input 
            type="password" 
            placeholder="Password" 
            className="input-field" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>

        {isSignUp && (
          <div className="flex items-center">
            <FaLock className="mr-2 text-mavani-gray" />
            <input 
              type="password" 
              placeholder="Confirm Password" 
              className="input-field" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required 
            />
          </div>
        )}

        <button type="submit" className="btn-primary w-full py-2 rounded">
          {isSignUp ? 'Sign Up' : 'Log In'}
        </button>

        <div className="text-center my-4">
          <p className="text-mavani-gray">or continue with</p>
          <button 
            type="button" 
            onClick={handleGoogleSignIn}
            className="mt-2 flex items-center justify-center w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            <FaGoogle className="mr-2" /> Google Sign-In
          </button>
        </div>

        <div className="text-center">
          <p>
            {isSignUp 
              ? 'Already have an account? ' 
              : 'Don\'t have an account? '}
            <button 
              type="button" 
              className="text-mavani-blue hover:underline"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? 'Log In' : '