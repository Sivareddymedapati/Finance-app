import React, { Component } from 'react'
import MainData from '../components/MainData'
import Modal from 'react-modal';
import uuid from 'uuid';
import Signin from '../components/Signin'
import '../components/Payments.css'



const default_user= {
    id: '',
    term : '',
    paymentDate: '',
    amount:'',
       
  }
  
  const users = [
    {
      "id": 1,
      "term": "10",
      "paymentDate": "2020-03-01",
      "amount": "5000",
      "uuid":uuid()
    },
    {
      "id": 2,
      "term": "10",
      "paymentDate": "2020-03-01",
      "amount": "5000",
      "uuid":uuid()
      },
      {
        "id": 3,
        "term": "10",
        "paymentDate": "2020-03-01",
        "amount": "5000",
        "uuid":uuid()
      },
      {
        "id": 4,
        "term": "10",
        "paymentDate": "2020-03-01",
        "amount": "5000",
        "uuid":uuid()
      },
      {
        "id": 5,
        "term": "10",
        "paymentDate": "2020-03-01",
        "amount": "5000",
        "uuid":uuid()
      },
      {
        "id": 6,
        "term": "10",
        "paymentDate": "2020-03-01",
        "amount": "5000",
        "uuid":uuid()
      },
      {
        "id": 7,
        "term": "10",
        "paymentDate": "2020-03-01",
        "amount": "5000",
        "uuid":uuid()
      },
      {
        "id": 8,
        "term": "10",
        "paymentDate": "2020-03-01",
        "amount": "5000",
        "uuid":uuid()
      },
      {
        "id": 9,
        "term": "10",
        "paymentDate": "2020-03-01",
        "amount": "5000",
        "uuid":uuid()
      },
      {
        "id": 10,
        "term": "10",
        "paymentDate": "2020-03-01",
        "amount": "5000",
        "uuid":uuid()
      }
    ];

class PaymentsByIndividuals extends Component {

    constructor(){
        super();
        this.state = {users,
                      user: {...default_user},
                      act:0,
                      index:'',
                      show: false}
      }
    
      onInputChange = (e)=>{
        const {target} = e;
        this.setState({
            user:{...this.state.user,[target.name]:target.value}
        })
        };
        
      saveData = (e, props) =>{
        let validate = this.props.usersPay.map((item) => {return item.id == this.state.user.id})
        let valid = validate.indexOf(true) 
        let {users, user} = this.state;
        let id = user.id;
        let term = user.term;
        let paymentDate = user.paymentDate;
        let amount = user.amount;
        ;

           
        if (valid !== -1) {    
        if(this.state.act ===0) {
          let user = {id,term,paymentDate,amount}
          users.push(user);
        } else {
          let index = this.state.index;
          users[index].id = id;
          users[index].term = term;
          users[index].paymentDate = paymentDate;
          users[index].amount = amount;
          
         
            }

        console.log(this.state.users)
        this.setState({
          users:users,
          act:0,
          user: {...default_user}
        });} else {alert("Enter valid Customer id")}} 
          
    
      
     
      findData = (index,uuid) =>{
       console.log(index)
       let user = users.find(task => task.uuid === uuid)
       console.log(user)
       this.setState({
         act:1,
         index:index,
         user:user,
         show: true
       });
    }
  
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
                            <li>Payment Date</li>
                            <li>Amount</li>
                            
                       </ul>
                    </div>
                    <div className="customerListinput grid-9">
                    <input type="text" name="id" placeholder="Customer Id" onChange={this.onInputChange} value={this.state.user.id}/><br/>
                    <input type="text" name="term" placeholder="Term" onChange={this.onInputChange} value={this.state.user.term} /><br/>
                    <input type="date" name="paymentDate" placeholder="yyyy-mm-dd" onChange={this.onInputChange} value={this.state.user.paymentDate}/><br/>
                    <input type="text" name="amount" placeholder="Amount" onChange={this.onInputChange} value={this.state.user.amount}/><br/>
                    
                    </div>
                    <div>
                    <div className="grid-6"></div> 
                    <div className="grid-2"> 
                    <button type="button" className="saveButton" onClick={this.saveData}>Save</button>
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
                            <th className="tableData">Payment Date</th>
                            <th className="tableData">Amount</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, index)=>{
                        return (
                            <tr key={index} className="borderColor">
                            <td className="tableData">{item.id}</td>
                            <td className="tableData"> {item.term}</td>
                            <td className="tableData"> {item.paymentDate}</td>
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
