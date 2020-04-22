import React, { Component } from 'react'
import Signin from '../components/Signin'
import './Customers.css'
import MainData from '../components/MainData'
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import './UserList.css'
import Scheme from '../components/Scheme'
Modal.setAppElement('#root')


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
        const { show} = this.props;
        let filteredNames = this.props.users.filter((user) => {return user.customerName.toLowerCase().indexOf(this.state.userName.toLowerCase()) !== -1})
        let filteredMobile = [...filteredNames].filter((user) => {return user.mobileNumber.indexOf(this.state.mobile) !== -1})
        let filteredData = [...filteredMobile].filter((user) => {return user.village.toLowerCase().indexOf(this.state.village.toLowerCase()) !== -1} )
        return (
            <div>
                <Signin />
                <Scheme />
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
            <div className="dataForm">
                <div className="grid-2"></div>  
                <div className="grid-10">
                <Modal isOpen={show} handleClose={show} className ="modal" >

                <div className="customersForm">
                
                    <div className="grid-3">
                        <ul className="customerListLabel">
                            <li>Id</li>
                            <li>Customer Name</li>
                            <li>Father Name</li>
                            <li>Mobile Number</li>
                            <li>Village</li>
                        </ul>
                    </div>
                    <div className="customerListInput grid-9">
                    <input type="text" name="id" placeholder="Customer Id" onChange={this.props.onInputChange} value={this.props.user.id}/> <br/>        
                    <input type="text" name="customerName" placeholder="Customer Name" onChange={this.props.onInputChange} value={this.props.user.customerName}/><br/>
                    <input type="text" name="fatherName" placeholder="Customer Father Name" onChange={this.props.onInputChange} value={this.props.user.fatherName} /><br/>
                    <input type="text" name="mobileNumber" placeholder="Customer Mobile Number" onChange={this.props.onInputChange} value={this.props.user.mobileNumber}/><br/>
                    <input type="text" name="village" placeholder="Customer Village" onChange={this.props.onInputChange} value={this.props.user.village}/><br/>
                    </div><br />
                    <div className="grid-0"><i class="fa fa-window-close-o" aria-hidden="true" onClick={this.props.hideModal}></i></div>
                    <div><button type="button" className="saveBtn" onClick={this.props.onSaveData}>Save</button></div>
                </div>
                </Modal>
                   
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
                        <th className="tableData">Father Name</th>
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
                            <td className="tableData"> {item.fatherName}</td>
                            <td className="tableData"> {item.mobileNumber}</td>
                            <td className="tableData"> {item.village}</td>
                            <td className="tableData"> <button className="updateBtn" type="button" ><i className="updateBtn" onClick={() => this.props.onFind(index,item.uuid)} class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>
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
