import React, { Component } from 'react'
import Signin from '../components/Signin'
import './Customers.css'
import MainData from '../components/MainData'
import {Link} from 'react-router-dom';
import './UserList.css'



class CustomerReport extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userName:"",
             mobile:"",
             village:""
        }
    }
    updateUserName = (event) => {
        this.setState({userName:event.target.value});
    }

    updateMobile = (event) => {
        this.setState({mobile:event.target.value});
    }

    updateVillage = (event)=> {
        this.setState({village:event.target.value});
    }

       render() {
        let amount = this.props.userspayment.map((payment) => {return payment.amount})   
        
        let filteredNames = this.props.users.filter((user) => {return user.customerName.toLowerCase().indexOf(this.state.userName.toLowerCase()) !== -1})
        let filteredMobile = [...filteredNames].filter((user) => {return user.mobileNumber.indexOf(this.state.mobile) !== -1})
        let filteredData = [...filteredMobile].filter((user) => {return user.village.toLowerCase().indexOf(this.state.village.toLowerCase()) !== -1} )
        return (
            <div>
                <Signin />
            <div>
            <div className="grid-2"></div>
            <div className="grid-10">
                <div className="filterData">
                    <ul className="label">
                        <li>Name</li>
                        <li>Mobile</li>
                        <li>Village</li>
                    </ul>
                     <div className="labelInput">
                        <input className="filterInput" type="text" name="userName" placeholder="Enter Name" value={this.state.username} onChange={this.updateUserName}/>
                        <input className="filterInput" type="text" name="mobile" placeholder="Enter mobile" value={this.state.mobile} onChange={this.updateMobile}/>
                        <input className="filterInput" type="text" name="village" placeholder="Village" value={this.state.village} onChange={this.updateVillage}/>
                    </div>       
                </div>
            </div>
            </div>
          
                <div>
                    <div className="grid-2"></div>
                    <div className="grid-10 table">
                    <div className="CustomerDetails">Customers Details</div>
                    <table>
                     <thead>
                        <tr className="borderColor">
                        <th className="tableData">Id</th>
                        <th className="tableData">Customer Name</th>
                        <th className="tableData">Mobile Number</th>
                        <th className="tableData">Village</th>
                        <th className="tableData">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index)=>{
                        return (
                            
                            <tr key={index} className="borderColor">
                            <td className="tableData">{item.id}</td>
                            <td className="tableData"> {item.customerName}</td>
                            <td className="tableData"> {item.mobileNumber}</td>
                            <td className="tableData"> {item.village}</td>
                           
                            <td className="tableData"> <button className="updateBtn" type="button" ><i className="updateBtn" onClick={() => {this.props.findUser(item.id)}} class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>
                            </tr>
                        );
                        })}
                    </tbody>
                    </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerReport
