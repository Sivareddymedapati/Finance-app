import React, { Component } from 'react'
import './Navigation.css'
import {Link} from 'react-router-dom'




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

    onClickCustomers = () =>{
        this.setState({
            Customers:!this.state.Customers,
            Prizes:false,
            Payments:false,
            Finance:false,
            Reports:false
        })
    }

    onClickPrizes = () =>{
        this.setState({
            Customers:false,
            Prizes:!this.state.Prizes,
            Payments:false,
            Finance:false,
            Reports:false
        })
    }

    onClickPayments = () =>{
        this.setState({
            Customers:false,
            Prizes:false,
            Payments:!this.state.Payments,
            Finance:false,
            Reports:false
        })
    }

    onClickFinance = () =>{
        this.setState({
            Customers:false,
            Prizes:false,
            Payments:false,
            Finance:!this.state.Finance,
            Reports:false
        })
    }

    onClickReports = () =>{
        this.setState({
            Customers:false,
            Prizes:false,
            Payments:false,
            Finance:false,
            Reports:!this.state.Reports
        })
    }
   
    
    render() {
            
        return (
            <div className="menu">
                <h4>{this.props.scheme}</h4>
                <div className="sideBar">
                        <button className="dropdown-btn" onClick={this.onClickCustomers}>Customers<i className={this.state.Customers ? "fa fa-angle-down":"fa fa-angle-right"}></i></button>
                            <div className={this.state.Customers ? "active" : "inactive"}>
                                <Link to="/customers"><a href="#">Customers List</a></Link>
                            </div>
                        <button className="dropdown-btn" onClick={this.onClickPrizes}>Prize<i className={this.state.Prizes ? "fa fa-angle-down":"fa fa-angle-right"}></i></button>
                            <div className={this.state.Prizes ? "active" : "inactive"}>
                                <Link to="/prize"><a href="#">Prizes List</a></Link>
                            </div>
                        <button className="dropdown-btn" onClick={this.onClickPayments}>Payments<i className={this.state.Payments ? "fa fa-angle-down":"fa fa-angle-right"}></i></button>
                            <div className={this.state.Payments ? "active" : "inactive"}>
                                <Link to="/paymentsByIndividuals"><a href="#">Payments by Individuals</a></Link>
                                <a href="#">Payments by Term</a>
                            </div>
                        <button className="dropdown-btn" onClick={this.onClickFinance}>Finance<i className={this.state.Finance ? "fa fa-angle-down":"fa fa-angle-right"}></i></button>
                            <div className={this.state.Finance ? "active" : "inactive"}>
                                <Link to="/FinanceToCustomers"><a href="#">Finance to Customer</a></Link>
                                <Link to="/FinanceExpenditure"><a href="#">Expenditure</a></Link>
                            </div>
                        <button className="dropdown-btn" onClick={this.onClickReports}>Reports<i className={this.state.Reports ? "fa fa-angle-down":"fa fa-angle-right"}></i></button>
                            <div className={this.state.Reports ? "active" : "inactive"}>
                                <Link to="/mobile"><a href="#">Mobile Numbers List</a></Link>
                                <a href="#">Payment Details By Term</a>
                                <Link to="/customerReport"><a href="#">Customer Report</a></Link>
                            </div>
                            	
		</div>	
            </div>  
              
            
        )
    }
}

export default Navigation
