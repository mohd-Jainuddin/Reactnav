import React from 'react'
import './login.css'

function Login() {
  // constructor(){
  //   super(props)
  //   this.state = {
  //     username: ''
  //   }
  // }
   return (
    <form>
      <div className="container">
        <h1>Login Page</h1>
        <label htmlFor="user">UserName: </label>
        <input type="text" name="user"/>
        <label htmlFor="pass">Password: </label>
        <input type="password" name="pass" id="" />
        <div className="btn">
          <button onClick={()=>alert('Thanks for login')}>Submit</button>
        </div>
      </div>
    </form>
  );
}

export default Login