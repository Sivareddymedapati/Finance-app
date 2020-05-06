import React, { Component } from 'react'
import Modal from 'react-modal';
import './Modal.css'
import '../components/CustomerReportData.css'
import Signin from './Signin';
Modal.setAppElement('#root')


export class CustomerReportData extends Component {
    render() {

        const divStyle = {
            height: '250px',
            border:'solid',
            borderColor:'#dddddd',
                   };

        return (
            <div>
                <Signin />
                <div>
                <div className="grid-2"></div>
                <div className="grid-10 dataHeader">
                 <div className="grid-2">
                    <button className="list_btn" onClick={this.props.ViewList}>View List</button>
                </div>   
                
                {this.props.userDetails.map((user) => {
                    return (
                   <div className="grid-9 data"> 

                    <span className="dataFields grid-2 datalabel">Customer Name:</span>
                    <span className="dataFields grid-2 inputcolor">{user.customerName}</span>
                    <span className="dataFields grid-2 datalabel">Father Name:</span>
                    <span className="dataFields grid-2 inputcolor">{user.fatherName}</span>
                    <span className="dataFields grid-2 datalabel">Paid Amount:</span>
                    <span className="dataFields grid-2 inputcolor">{this.props.paidamount}</span>
                    <span className="dataFields grid-2 datalabel">Mobile Number:</span>
                    <span className="dataFields grid-2 inputcolor">{user.mobileNumber}</span>
                    <span className="dataFields grid-2 datalabel">Actual Amount:</span>
                    <span className="dataFields grid-2 inputcolor">{this.props.actualamount}</span>
                    <span className="dataFields grid-2 datalabel">Finance Amount:</span>
                    <span className="dataFields grid-2 inputcolor">{this.props.financeamount}</span>
                    </div>
                )})}
                </div>
                </div>
                <div className="dataForm">
                <div className="grid-2"></div>  
                <div className="grid-10">
                <Modal isOpen={this.props.showpayment1} handleClose={this.props.showpayment1} className ="modal" >

                <div style={divStyle}>
                    <div>
                    <div className="grid-3">
                        <ul className="customerListLabel">
                            <li>Term</li>
                            <li>Paid Date</li>
                            <li>Amount</li>
                       </ul>
                    </div>
                    <div className="customerListInput grid-8">
                    <input type="text" name="term" placeholder="Payment Type" onChange={this.props.onInputChangepayment1} value={this.props.userpayment1.term}/><br/> 
                    <input type="date" name="paidDate" placeholder="yyyy-mm-dd" onChange={this.props.onInputChangepayment1} value={this.props.userpayment1.paidDate}/><br/>
                    <input type="number" name="amount" placeholder="Amount" onChange={this.props.onInputChangepayment1} value={this.props.userpayment1.amount}/><br/>
                    </div><br />
                    <div className="grid-1"><i class="fa fa-window-close-o" aria-hidden="true" onClick={this.props.hideModalpayment1}></i></div>
                    </div>
                    <div className="grid-5"></div>
                    <div className="grid-2 savebtn"><button type="button" className="greenActive" onClick={this.props.saveDatapayment1}>Update</button></div>
                </div>
                </Modal>
                   
                    </div>
                </div>
                <div>
                    <div className="grid-2"></div>
                    <div className="grid-5 ">
                    <div className="CustomerDetailsReports">Payment Details</div>
                    <table className="tableReports">
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
                            <td className="tableData"> <button className="updateBtn" type="button" ><i className="updateBtn" onClick={() => this.props.findDatapayment1(index,item.uuid)} class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                            <button className="btn-edit del-btn" ><i class="fa fa-trash-o" aria-hidden="true" onClick={() =>this.props.deleteItemPayments(index,item.uuid)}></i></button></td>
                            </tr>
                        );
                        })}
                    </tbody>
                    </table>
                    </div>
                    <div className="grid-5 ">
                    <div className="CustomerDetailsReports">Finance Details</div>
                    <table className="tableReports">
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
                            <td className="tableData"> <button className="updateBtn" type="button" ><i className="updateBtn" onClick={() => this.props.findDataFinance1(index,item.uuid)} class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                            <button className="btn-edit del-btn" ><i class="fa fa-trash-o" aria-hidden="true" onClick={() =>this.props.deleteItem(index,item.uuid)}></i></button></td>
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

                <div style={divStyle}>
                   <div> 
                  <div>
                    <div className="grid-3">
                        <ul className="customerListLabel">
                            <li>Payment Date</li>
                            <li>Amount</li>
                            <li>Payment Type</li>
                       </ul>
                    </div>
                    <div className="customerListInput grid-8">
                     
                    <input type="date" name="paymentDate" placeholder="yyyy-mm-dd" onChange={this.props.onInputChangefinance1} value={this.props.userfinance1.paymentDate}/><br/>
                    <input type="number" name="amount" placeholder="Amount" onChange={this.props.onInputChangefinance1} value={this.props.userfinance1.amount}/><br/>
                    <input type="text" name="paymentType" placeholder="Payment Type" onChange={this.props.onInputChangefinance1} value={this.props.userfinance1.paymentType}/><br/>
                    </div>
                    <div className="grid-1"><i class="fa fa-window-close-o" aria-hidden="true" onClick={this.props.hideModalfinance1}></i></div>
                    </div> 
                    <div className="grid-5"></div>
                    <div className="grid-2 savebtn">
                    <div><button type="button" className="greenActive" onClick={this.props.saveDatafinance1}>Update</button></div>
                    </div>
                    </div>
                </div>
                </Modal>
                   
                    </div>
                </div>

            </div>

               
        )
    }
}

export default CustomerReportData
