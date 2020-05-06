import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import Loginbar from '../components/Loginbar'


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
             <Loginbar />  
               <div className="grid-2"></div>
               <div className="grid-10">
               <div className="grid-1"></div>    
               <form className="grid-7" onSubmit={this.handleSubmit}> 
                <div>
                <div className="grid-2"></div>
                <h1 class="grid-8 loginHeading">Financier Login</h1>
                <div className="grid-2"></div>
                </div>
                <div>
                <div>    
                <ul className="grid-4 inputLabel">
                    <li className="formLabel">User Name</li>
                    <li className="formLabel">Password</li>
                    <li className="formLabel">Scheme</li>
                </ul>
                </div>
                
                <div className="grid-7 loginInput"> 
                    
                    <input className="input" type="text" name="User_Name" required placeholder="User Name" value={this.state.name} onChange={this.updateName}/><br/>
                    <input className="input" type="password" name="Password" required placeholder="Password" value={this.state.pass} onChange={this.updatePass} /><br/>
                    <select className="input" name="SCHEME" required placeholder="Select Scheme" value={this.props.scheme} onChange={this.props.updateScheme}>
                    <option></option>
                    <option value="SCHEME K">SCHEME K</option>
                    <option value="SCHEME L">SCHEME L</option>
                    <option value="SCHEME M">SCHEME M</option>
                    </select><br/>
                </div>  
                </div> 
                  <div> 
                   <div className="grid-5"></div>
                   <button className="grid-2 subBtn" type="submit">Login</button>
                   </div>
                   <div>{this.state.error}</div>
                  
                 
                </form> 
                <div className="grid-3"></div>
                </div>
                </div>
                
               
            
        )
    }
}

export default Login
