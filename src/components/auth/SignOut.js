import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import { signOut } from '../../api/auth'
import { signOutSuccess } from '../AutoDismissAlert/messages'

const SignOut = ({ msgAlert, clearUser, user }) => {
  const [shouldNavigate, setShouldNavigate] = useState(false)

  useEffect(async () => {
    await signOut(user)

    msgAlert({
      heading: 'Signed Out Successfully',
      message: signOutSuccess,
      variant: 'success'
    })
    setShouldNavigate(true)
    clearUser()
  }, [])

  if (!user || shouldNavigate) {
    return <Navigate to='/' />
  }

  return ''
}

export default SignOut
