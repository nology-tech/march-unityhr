import "./ChangePassword.scss"
import React from "react"

const ChangePassword = () => {


  return (
    <div className="centerBox">
      <h1 className="title">Change your password</h1>
      <p className="instruction">Just enter the fields below to choose a new password.</p>
      <p className="passwordHeading">New Password</p>
      <input className="inputPassword"></input>
      <p className="passwordHeading">Confirm New Password</p>
      <input className="inputPassword"></input>
      <br/>
      <button className="submitButton">Submit</button>  
    </div>
  )
} 
export default ChangePassword
