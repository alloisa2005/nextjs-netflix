import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'
import Navbar from '../components/Navbar'
import { authOptions } from '../utils/auth'

const HomeLayout = async ({ children }) => {

  const session = await getServerSession(authOptions)

  if(!session) {
    return redirect('/login')
  }

  return (
    <>
      <Navbar />

      <main className='w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {children}
      </main>
    </>
  )
}

export default HomeLayout