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

        const divStyle = {
            height: '300px',
            border:'solid',
            borderColor:'#dddddd',
                   };
       
        return (
            <div>
              
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

                <div style={divStyle}>
                
                    <div className="grid-3">
                        <ul className="customerListLabel">
                            <li>Id</li>
                            <li>Payment Date</li>
                            <li>Amount</li>
                            <li>Payment Type</li>
                       </ul>
                    </div>
                    <div className="customerListInput grid-8">
                    <input type="text" name="id" placeholder="Customer Id" onChange={this.props.onInputChange} value={this.props.userfinance.id}/><br/>
                    <input type="date" name="paymentDate" placeholder="yyyy-mm-dd" onChange={this.props.onInputChange} value={this.props.userfinance.paymentDate}/><br/>
                    <input type="number" name="amount" placeholder="Amount" onChange={this.props.onInputChange} value={this.props.userfinance.amount}/><br/>
                    <input type="text" name="paymentType" placeholder="Payment Type" onChange={this.props.onInputChange} value={this.props.userfinance.paymentType}/><br/>
                    </div>
                    <div className="grid-1">
                    <div><i class="fa fa-window-close-o" aria-hidden="true" onClick={this.props.hideModalfinance}></i></div>
                    </div>
                    <div className="grid-5"></div>
                    <div className="grid-2 savebtn"><button type="button" className={this.props.financeEditBtn ? "greenActive":"saveBtn"} onClick={this.props.saveData}>{this.props.financeEditBtn ? "Update":"Save"}</button></div>
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
                            <th className="tableData">Actions</th>
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
                            <td className="tableData"> <button className="updateBtn" type="button" ><i className="updateBtn" onClick={() => this.props.findData(index,item.uuid)} class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                            <button className="del-btn " onClick={() =>this.props.deleteItem(index,item.uuid)}><i class="fa fa-trash-o" aria-hidden="true"></i></button></td>
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
