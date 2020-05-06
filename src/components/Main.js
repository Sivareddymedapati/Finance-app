import React, { Component } from 'react'
import MainData from './MainData'
import Login from './Login'
import {Redirect, Route} from 'react-router-dom'

 class Main extends Component {
 
    constructor(props) {
        super(props)
    
        this.state = {
            login:false,
            name:"",
            pass:"",
            scheme:"",
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

    updateScheme = (event) => {
        this.setState({
            scheme:event.target.value,
            
        })
        
    }

    handleSubmit = e => {
        e.preventDefault()
        if(this.state.name==="user" && this.state.pass==="a") {
            this.setState({
                valid:true,
                login:true,
                error:""});
           if(this.state.login) {return <Redirect to='/' /> }   
                      }
            else {this.setState({
                error:"Invalid user",
                valid:false,
                login:false
                })}
         } 

      logout = () =>{
        this.setState({
            login:false
        })
      }   
    
    render() { 
        return (
            <div>
                <CheckLogin logout={this.logout} login={this.state.login} name={this.state.name} pass={this.state.pass} scheme={this.state.scheme} valid={this.state.valid} handleSubmit={this.handleSubmit} updatePass={this.updatePass} updateName={this.updateName} updateScheme={this.updateScheme} error={this.state.error}/>
            </div>
        )
    }
}

export default Main

function CheckLogin(props) {
    if(props.login) {
        return (
        <MainData login ={props.login} logout={props.logout} scheme={props.scheme}/>
        )
     } 
        else {
        return (         
        <Login valid={props.valid} name={props.name} pass={props.pass} scheme={props.scheme} handleSubmit={props.handleSubmit} updatePass={props.updatePass} updateName={props.updateName} updateScheme={props.updateScheme} error={props.error} />)
    }}  