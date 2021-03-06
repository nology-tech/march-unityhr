import "./ChangePassword.scss"
import AuthenticationPageLeft from "../AuthenticationPageLeft/AuthenticationPageLeft"
import React from "react"
import { useState } from "react"

const ChangePassword = () => {
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handlePassword1 = (e) => {
    setPassword1(e.target.value)
  }

  const handlePassword2 = (e) => {
    setPassword2(e.target.value)
  }

  const handleSubmit = () => {
    if (password1 === "" || password2 === "") {
      setErrorMessage("Please enter a valid password")
    } else if (password1 !== password2) {
      setErrorMessage("Entered passwords don't match")
    } else {
      setErrorMessage("Password Changed")
    }
  }

  return (
    <section className="changePasswordContainer">
      <AuthenticationPageLeft />
    
    <form className="centerBox">
      <h1 className="title">Change your password</h1>
      <p className="instruction">Just enter the fields below to choose a new password.</p>
      <label htmlFor="password-one" className="passwordHeading">New Password</label>
      <input data-testid="password-one" type="password" name="password-one" className="inputPassword" onInput={handlePassword1}></input>
      <label htmlFor="password-two" className="passwordHeading">Confirm New Password</label>
      <input data-testid="password-two" type="password" name="password-two" className="inputPassword" onInput={handlePassword2}></input>
      <br/>
      <span className="errorText">{errorMessage}</span>
      <button type="button" className="submitButton" onClick={handleSubmit}>Submit</button>  
    </form>
    </section>
  )
} 
export default ChangePassword
