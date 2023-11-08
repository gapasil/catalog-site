import React, { useEffect, useState } from 'react'
import style from "./header.module.css"
import logo from "../../images/logo.png"
import Input from '../input/Input'

export const Header = () => {
  const [ inputValue, setInputValue ] = useState("")

  useEffect(()=>{
    console.log(inputValue);
  },[inputValue])

  return (
    <div className={style.container}>
      <a href={"https://t.me/gapasil"}><img src={logo} alt='logo' className={style.logo}/></a>
      <Input setState={(value) => setInputValue(value)}/>
    </div>
  )
}
