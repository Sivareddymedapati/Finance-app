import React, { Component } from 'react'
import Modal from 'react-modal';
import './Modal.css'
import '../components/CustomerReportData.css'
Modal.setAppElement('#root')

export class CustomerReportData extends Component {
    render() {
        return (
            <div>
                <div>
                <div className="grid-2"></div>
                <div className="grid-10"></div>
                <div>
                {this.props.userDetails.map((user) => {
                    return (
                   <div>     
                    <div>Customer Name:{user.customerName}</div>
                    <div>Father Name:{user.fatherName}</div>
                    <div>Paid Amount:{user.fatherName}</div>
                    <div>Mobile Number:{user.mobileNumber}</div>
                    <div>Actual Amount:{user.fatherName}</div>
                    </div>
                )})}
                </div>
                </div>
                <div className="dataForm">
                <div className="grid-2"></div>  
                <div className="grid-10">
                <Modal isOpen={this.props.showpayment1} handleClose={this.props.showpayment1} className ="modal" >

                <div className="customersForm">
                
                    <div className="grid-3">
                        <ul className="customerListLabel">
                            <li>Term</li>
                            <li>Paid Date</li>
                            <li>Amount</li>
                       </ul>
                    </div>
                    <div className="customerListInput grid-9">
                     
                    <input type="text" name="term" placeholder="yyyy-mm-dd" onChange={this.props.onInputChangepayment1} value={this.props.userpayment1.term}/><br/>
                    <input type="text" name="paidDate" placeholder="Amount" onChange={this.props.onInputChangepayment1} value={this.props.userpayment1.paidDate}/><br/>
                    <input type="text" name="amount" placeholder="Payment Type" onChange={this.props.onInputChangepayment1} value={this.props.userpayment1.amount}/><br/>
                    </div><br />
                    <div className="grid-0"><i class="fa fa-window-close-o" aria-hidden="true" onClick={this.props.hideModalpayment1}></i></div>
                    <div><button type="button" className="saveBtn" onClick={this.props.saveDatapayment1}>Save</button></div>
                </div>
                </Modal>
                   
                    </div>
                </div>
                <div>
                    <div className="grid-2"></div>
                    <div className="grid-5 table">
                    <div className="CustomerDetails">Payment Details</div>
                    <table className="table">
                     <thead>
                        <tr className="borderColor">
                            <th className="tableData">Term</th>
                            <th className="tableData">Paid Date</th>
                            <th className="tableData">Amount</th>
                            <th className="tableData">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.userPayment.map((item, index)=>{
                        return (
                            <tr key={index} className="borderColor">
                            <td className="tableData"> {item.term}</td>
                            <td className="tableData"> {item.paidDate}</td>
                            <td className="tableData"> {item.amount}</td>
                            <td className="tableData"> <button className="updateBtn" type="button" ><i className="updateBtn" onClick={() => this.props.findDatapayment1(index,item.uuid)} class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>
                            </tr>
                        );
                        })}
                    </tbody>
                    </table>
                    </div>
                    <div className="grid-5 table">
                    <div className="CustomerDetails">Finance Details</div>
                    <table className="table">
                     <thead>
                        <tr className="borderColor">
                            <th className="tableData">Payment Date</th>
                            <th className="tableData">Amount</th>
                            <th className="tableData">Payment Type</th>
                            <th className="tableData">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.userFinance.map((item, index)=>{
                        return (
                            <tr key={index} className="borderColor">
                            <td className="tableData"> {item.paymentDate}</td>
                            <td className="tableData"> {item.amount}</td>
                            <td className="tableData"> {item.paymentType}</td>
                            <td className="tableData"> <button className="updateBtn" type="button" ><i className="updateBtn" onClick={() => this.props.findDataFinance1(index,item.uuid)} class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>
                            </tr>
                        );
                        })}
                    </tbody>
                    </table>
                    </div>
                </div>
                

                <div className="dataForm">
                <div className="grid-2"></div>  
                <div className="grid-10">
                <Modal isOpen={this.props.showfinance1} handleClose={this.props.showfinance1} className ="modal" >

                <div className="customersForm">
                
                    <div className="grid-3">
                        <ul className="customerListLabel">
                            <li>Payment Date</li>
                            <li>Amount</li>
                            <li>Payment Type</li>
                       </ul>
                    </div>
                    <div className="customerListInput grid-9">
                     
                    <input type="text" name="paymentDate" placeholder="yyyy-mm-dd" onChange={this.props.onInputChangefinance1} value={this.props.userfinance1.paymentDate}/><br/>
                    <input type="text" name="amount" placeholder="Amount" onChange={this.props.onInputChangefinance1} value={this.props.userfinance1.amount}/><br/>
                    <input type="text" name="paymentType" placeholder="Payment Type" onChange={this.props.onInputChangefinance1} value={this.props.userfinance1.paymentType}/><br/>
                    </div><br />
                    <div className="grid-0"><i class="fa fa-window-close-o" aria-hidden="true" onClick={this.props.hideModalfinance1}></i></div>
                    <div><button type="button" className="saveBtn" onClick={this.props.saveDatafinance1}>Save</button></div>
                </div>
                </Modal>
                   
                    </div>
                </div>

            </div>

               
        )
    }
}

export default CustomerReportData
