'use client'

import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import React from 'react'

const SignOutButton = () => {
  return (
    <Button variant='outline' onClick={ () => signOut() }>SignOut</Button>
  )
}

export default SignOutButton