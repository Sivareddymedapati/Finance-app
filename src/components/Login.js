import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'


class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             pass:"",
             error:"",
             valid:false
        }
    }
    updateName = (event) => {
       this.setState({
            name:event.target.value
        })
    }
    updatePass = (event) => {
        this.setState({
            pass:event.target.value
        })
    }
   
    handleSubmit = e => {
        e.preventDefault()
        if(this.state.name==="user" && this.state.pass==="a") {
            this.setState({valid:true})
          }
            else {this.setState({error:"Invalid user"})}
         }   
    
    render() {   
        
        if(this.state.valid) {return <Redirect to='/customers' />}

        return (
           <div>
               
              <div className="nav_login">
               <div className="nav_bar">
                   <h2>Login</h2>
                   <h2>Terms and conditions</h2>
               </div>
               </div>
               <form className="loginForm lgn" onSubmit={this.handleSubmit}> 
                <h1 class="lgn_heading">Financier Login</h1>
                <ul className="loginFormLabel ">
                    <li className="formLabel">User Name</li>
                    <li className="formLabel">Password</li>
                    <li className="formLabel">Scheme</li>
                </ul>
                <div className="loginFormInput lgn"> 
                    
                    <input className="input" type="text" name="User_Name" required placeholder="User Name" value={this.state.name} onChange={this.updateName}/><br/>
                    <input className="input" type="password" name="Password" required placeholder="Password" value={this.state.pass} onChange={this.updatePass} /><br/>
                    <select className="input" name="SCHEME" required placeholder="Select Scheme" value={this.props.scheme} onChange={this.props.updateScheme}>
                    <option></option>
                    <option value="SCHEME K">SCHEME K</option>
                    <option value="SCHEME L">SCHEME L</option>
                    <option value="SCHEME M">SCHEME M</option>
                    </select><br/>
                   <button className="lgn_btn" type="submit">Login</button>
                   <div>{this.state.error}</div>
                </div>    
                 
                </form> 
               
                </div>
                
               
            
        )
    }
}

export default Login
