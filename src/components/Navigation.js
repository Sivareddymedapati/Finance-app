import React, { Component } from 'react'
import './Navigation.css'
import { UserConsumer } from './Context/Context'


class Navigation extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             Customers:false,
             Prizes:false,
             Payments:false,
             Finance:false,
             Reports:false
        }
    }
   
    
    render() {
            const {sch} = this.props
        return (
            <div className="menu">
                <UserConsumer>
                   {(sch) => {return <div>{sch}</div>}}
                </UserConsumer>
                <div className="sideBar">
                        <button className="dropdown-btn" onClick={() => {this.setState({Customers:!this.state.Customers})}}>Customers<i className={this.state.Customers ? "fa fa-angle-down":"fa fa-angle-right"}></i></button>
                            <div className={this.state.Customers ? "active" : "inactive"}>
                                <a href="#">Customers List</a>
                            </div>
                        <button className="dropdown-btn" onClick={() => {this.setState({Prizes:!this.state.Prizes})}}>Prize<i className={this.state.Prizes ? "fa fa-angle-down":"fa fa-angle-right"}></i></button>
                            <div className={this.state.Prizes ? "active" : "inactive"}>
                                <a href="#">Prizes List</a>
                            </div>
                        <button className="dropdown-btn" onClick={() => {this.setState({Payments:!this.state.Payments})}}>Payments<i className={this.state.Payments ? "fa fa-angle-down":"fa fa-angle-right"}></i></button>
                            <div className={this.state.Payments ? "active" : "inactive"}>
                                <a href="#">Payments by Individuals</a>
                                <a href="#">Payments by Term</a>
                            </div>
                        <button className="dropdown-btn" onClick={() => {this.setState({Finance:!this.state.Finance})}}>Finance<i className={this.state.Finance ? "fa fa-angle-down":"fa fa-angle-right"}></i></button>
                            <div className={this.state.Finance ? "active" : "inactive"}>
                                <a href="#">Finance to Customer</a>
                                <a href="#">Expenditure</a>
                            </div>
                        <button className="dropdown-btn" onClick={() => {this.setState({Reports:!this.state.Reports})}}>Reports<i className={this.state.Reports ? "fa fa-angle-down":"fa fa-angle-right"}></i></button>
                            <div className={this.state.Reports ? "active" : "inactive"}>
                                <a href="#">Mobile Numbers List</a>
                                <a href="#">Payment Details By Term</a>
                                <a href="#">Customer Report</a>
                            </div>
                            	
		</div>	
            </div>  
              
            
        )
    }
}

export default Navigation
