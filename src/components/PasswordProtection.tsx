"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { LockIcon } from 'lucide-react'

export function PasswordProtection({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const auth = localStorage.getItem('site-auth')
    if (auth === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (password === process.env.NEXT_PUBLIC_SITE_PASSWORD) {
      setIsAuthenticated(true)
      localStorage.setItem('site-auth', 'true')
      setError('')
    } else {
      setError('Incorrect password')
    }
  }

  if (isAuthenticated) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div>
            <LockIcon className="w-10 h-10 mx-auto text-[#08314e]" />
          <h2 className="mt-6 text-center text-3xl font-bold text-[#08314e]">
            Protected Content
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please enter the password to access this site
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#08314e] focus:border-[#08314e] focus:z-10 sm:text-sm"
              placeholder="Enter password"
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
          <Button
            type="submit"
            className="w-full bg-[#08314e] hover:bg-[#08314e]/90"
          >
            Access Site
          </Button>
        </form>
      </div>
    </div>
  )
} 