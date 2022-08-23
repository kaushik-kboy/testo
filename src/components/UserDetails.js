import React from 'react'

export default function UserDetails({onChangeHndler}) {
  return (
    <div>
        <input onKeyUp={onChangeHndler}></input>
    </div>
  )
}
