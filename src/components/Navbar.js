import React from 'react'
import UserDetails from './UserDetails'

export default function Navbar({onChangeHndler}) {
  return (
    <div>
        navbar
        <UserDetails onChangeHndler={onChangeHndler}/>
    </div>
  )
}
