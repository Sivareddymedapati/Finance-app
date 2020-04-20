import React, { Component } from 'react'
import './Customers.css'
import MainData from '../components/MainData'
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import './Modal.css'
import './UserList.css'
import uuid from 'uuid';
Modal.setAppElement('#root')


const default_user= {
    id: '',
    customerName : '',
    paymentDate: '',
    amount:'',
    paymentType: ''
    
  }
  const users = [
    {
      "id": 1,
      "customerName": "Zoey Benson",
      "paymentDate": "2020/03/01",
      "amount": "5000",
      "paymentType": "cash",
      "uuid":uuid()
    },
    {
      "id": 2,
      "customerName": "Dangelo Rollins",
      "paymentDate": "2020/03/01",
      "amount": "5000",
      "paymentType": "cash",
      "uuid":uuid()
      },
      {
        "id": 3,
      "customerName": "uSkylar Byrd",
      "paymentDate": "2020/03/01",
      "amount": "5000",
      "paymentType": "cash",
      "uuid":uuid()
      },
      {
        "id": 4,
        "customerName": "Soren Rios",
        "paymentDate": "2020/03/01",
        "amount": "5000",
        "paymentType": "cash",
        "uuid":uuid()
      },
      {
        "id": 5,
        "customerName": "Autumn Hull",
        "paymentDate": "2020/03/01",
        "amount": "5000",
        "paymentType": "cash",
        "uuid":uuid()
      },
      {
        "id": 6,
        "customerName": "Zoey Benson",
        "paymentDate": "2020/03/01",
        "amount": "5000",
        "paymentType": "cash",
        "uuid":uuid()
      },
      {
        "id": 7,
        "customerName": "Dangelo Rollins",
        "paymentDate": "2020/03/01",
        "amount": "5000",
        "paymentType": "cash",
        "uuid":uuid()
      },
      {
        "id": 8,
        "customerName": "uSkylar Byrd",
        "paymentDate": "2020/03/01",
        "amount": "5000",
        "paymentType": "cash",
        "uuid":uuid()
      },
      {
        "id": 9,
        "customerName": "Soren Rios",
        "paymentDate": "2020/03/01",
        "amount": "5000",
        "paymentType": "cash",
        "uuid":uuid()
      },
      {
        "id": 10,
        "customerName": "5Autumn Hull",
        "paymentDate": "2020/03/01",
        "amount": "5000",
        "paymentType": "cash",
        "uuid":uuid()
      }
    ];

class FinanceToCustomers extends Component {

    constructor(){
        super();
        this.state = {users,
                      user: {...default_user},
                      act:0,
                      index:'',
                      show: false}
      }
    
      showModal = () => {
        this.setState({ show: true });
      }
      
      hideModal = () => {
        this.setState({ 
          show: false,
          user: {...default_user},
          act:0
         });
      }
    
      onInputChange = (e)=>{
        const {target} = e;
        this.setState({
            user:{...this.state.user,[target.name]:target.value}
        })
        };
        
      saveData = (e, props) =>{
        let validate = this.props.usersFin.map((item) => {return item.id == this.state.user.id})
        let valid = validate.indexOf(true) 
        let {users, user} = this.state;
        let id = user.id;
        let customerName = user.customerName;
        let paymentDate = user.paymentDate;
        let amount = user.amount;
        let paymentType = user.paymentType;

           
        if (valid !== -1) {    
        if(this.state.act ===0) {
          let user = {id,customerName,paymentDate,amount,paymentType}
          users.push(user);
        } else {
          let index = this.state.index;
          users[index].id = id;
          users[index].customerName = customerName;
          users[index].paymentDate = paymentDate;
          users[index].amount = amount;
          users[index].paymentType = paymentType;
         
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
            <div>
            <div className="grid-2"></div>
                <div className="grid-10">
                    <div className="grid-10"></div>
                    <div className="filterData grid-2">
                        <button className="add_btn"type="button" onClick={this.showModal}><i class="fa fa-plus-circle" aria-hidden="true"></i>Finance</button>
                    </div>
                </div>
            </div>
            <div className="dataForm">
                <div className="grid-2"></div>  
                <div className="grid-10">
                <Modal isOpen={this.state.show} handleClose={this.state.show} className ="modal" >

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
                    <input type="text" name="id" placeholder="Customer Id" onChange={this.onInputChange} value={this.state.user.id}/><br/>
                    <input type="text" name="customerName" placeholder="Customer Name" onChange={this.onInputChange} value={this.state.user.customerName} /><br/>
                    <input type="text" name="paymentDate" placeholder="yyyy-mm-dd" onChange={this.onInputChange} value={this.state.user.paymentDate}/><br/>
                    <input type="text" name="amount" placeholder="Amount" onChange={this.onInputChange} value={this.state.user.amount}/><br/>
                    <input type="text" name="paymentType" placeholder="Payment Type" onChange={this.onInputChange} value={this.state.user.paymentType}/><br/>
                    </div><br />
                    <div className="grid-0"><i class="fa fa-window-close-o" aria-hidden="true" onClick={this.hideModal}></i></div>
                    <div><button type="button" className="saveBtn" onClick={this.saveData}>Save</button></div>
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
                        {users.map((item, index)=>{
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
