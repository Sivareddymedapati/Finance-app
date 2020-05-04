import React, { Component } from 'react'
import './Customers.css'
import MainData from '../components/MainData'
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import './Modal.css'
import './UserList.css'
import Signin from '../components/Signin'
Modal.setAppElement('#root')




class FinanceToCustomers extends Component {
  
       render() {
       
        return (
            <div>
              <Signin />
            <div>
            <div className="grid-2"></div>
                <div className="grid-10">
                    <div className="grid-10"></div>
                    <div className="filterData grid-2">
                        <button className="add_btn"type="button" onClick={this.props.showModalfinance}><i class="fa fa-plus-circle" aria-hidden="true"></i>Finance</button>
                    </div>
                </div>
            </div>
            <div className="dataForm">
                <div className="grid-2"></div>  
                <div className="grid-10">
                <Modal isOpen={this.props.showfinance} handleClose={this.props.showfinance} className ="modal" >

                <div className="customersForm">
                
                    <div className="grid-3">
                        <ul className="customerListLabel">
                            <li>Id</li>
                            <li>Customer Name</li>
                            <li>Payment Date</li>
                            <li>Amount</li>
                            <li>Payment Type</li>
                       </ul>
                    </div>
                    <div className="customerListInput grid-9">
                    <input type="text" name="id" placeholder="Customer Id" onChange={this.props.onInputChange} value={this.props.userfinance.id}/><br/>
                    <input type="text" name="customerName" placeholder="Customer Name" onChange={this.props.onInputChange} value={this.props.userfinance.customerName} /><br/>
                    <input type="text" name="paymentDate" placeholder="yyyy-mm-dd" onChange={this.props.onInputChange} value={this.props.userfinance.paymentDate}/><br/>
                    <input type="text" name="amount" placeholder="Amount" onChange={this.props.onInputChange} value={this.props.userfinance.amount}/><br/>
                    <input type="text" name="paymentType" placeholder="Payment Type" onChange={this.props.onInputChange} value={this.props.userfinance.paymentType}/><br/>
                    </div><br />
                    <div className="grid-0"><i class="fa fa-window-close-o" aria-hidden="true" onClick={this.props.hideModalfinance}></i></div>
                    <div><button type="button" className="saveBtn" onClick={this.props.saveData}>Save</button></div>
                </div>
                </Modal>
                   
                    </div>
                </div>
                <div>
                    <div className="grid-2"></div>
                    <div className="grid-10 table">
                    <div className="CustomerDetails">Expenditure Details</div>
                    <table>
                     <thead>
                        <tr className="borderColor">
                            <th className="tableData">Id</th>
                            <th className="tableData">Customer Name</th>
                            <th className="tableData">Payment Date</th>
                            <th className="tableData">Amount</th>
                            <th className="tableData">Payment Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.usersfinance.map((item, index)=>{
                        return (
                            <tr key={index} className="borderColor">
                            <td className="tableData">{item.id}</td>
                            <td className="tableData"> {item.customerName}</td>
                            <td className="tableData"> {item.paymentDate}</td>
                            <td className="tableData"> {item.amount}</td>
                            <td className="tableData"> {item.paymentType}</td>
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


export default FinanceToCustomers
