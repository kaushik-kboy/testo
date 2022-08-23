import React from 'react'
import Navbar from "./Navbar";

export default function Header({onChangeHndler}) {
  return (
    <div>
        <Navbar onChangeHndler={onChangeHndler}/>
    </div>
  )
}
