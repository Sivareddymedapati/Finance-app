import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Signin extends Component {
    render() {
        return (
            <div>    
            <div className="grid-2"></div>
            <div className="grid-10">
                <div className="user_login">
                    <div className="grid-11"></div>
                    <div className="grid-1 ">
                        <span className="loginText">User</span>
                        <Link to="/"><i class="fa fa-power-off" aria-hidden="true" onClick={this.props.logout}></i></Link>
                    </div>
                </div> 
            </div>
            </div>
        )
    }
}

export default Signin
