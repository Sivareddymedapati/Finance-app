import React, { Component } from 'react'
import Signin from '../components/Signin'
import '../components/Payments.css'

class PaymentsByIndividuals extends Component {

  
       render() {
       
        return (
            <div>
              <Signin />
             <div className="dataForm">
                <div className="grid-2"></div>  
                <div className="grid-10">
                  <div className="customerForm">
                
                    <div className="grid-3">
                        <ul className="customerListLabel">
                            <li>Id</li>
                            <li>Term</li>
                            <li>Paid Date</li>
                            <li>Amount</li>
                            
                       </ul>
                    </div>
                    <div className="customerListinput grid-9">
                    <input type="text" name="id" placeholder="Customer Id" onChange={this.props.onInputChange} value={this.props.userpayment.id}/><br/>
                    <input type="text" name="term" placeholder="Term" onChange={this.props.onInputChange} value={this.props.userpayment.term} /><br/>
                    <input type="date" name="paidDate" placeholder="yyyy-mm-dd" onChange={this.props.onInputChange} value={this.props.userpayment.paidDate}/><br/>
                    <input type="text" name="amount" placeholder="Amount" onChange={this.props.onInputChange} value={this.props.userpayment.amount}/><br/>
                    
                    </div>
                    <div>
                    <div className="grid-6"></div> 
                    <div className="grid-2"> 
                    <button type="button" className="saveButton" onClick={this.props.saveData}>Save</button>
                    </div>
                    
                    </div>
                </div>
                
                   
                    </div>
                </div>
                <div>
                    <div className="grid-2"></div>
                    <div className="grid-10 table">
                    <div className="CustomerDetails">Payment by Individuals</div>
                    <table>
                     <thead>
                        <tr className="borderColor">
                            <th className="tableData">Id</th>
                            <th className="tableData">Term</th>
                            <th className="tableData">Paid Date</th>
                            <th className="tableData">Amount</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.userspayment.map((item, index)=>{
                        return (
                            <tr key={index} className="borderColor">
                            <td className="tableData">{item.id}</td>
                            <td className="tableData"> {item.term}</td>
                            <td className="tableData"> {item.paidDate}</td>
                            <td className="tableData"> {item.amount}</td>
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


export default PaymentsByIndividuals
