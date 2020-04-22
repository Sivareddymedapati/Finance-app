import React, { Component } from 'react'
import './Customers.css'
import Signin from '../components/Signin' 
import MainData from '../components/MainData'
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import './Modal.css'
import './UserList.css'
import uuid from 'uuid';
Modal.setAppElement('#root')


const default_user= {
    SNo: '',
    expenseAmount : '',
    expenseDate: '',
    Description:''
    
  }
  const users = [
    {
      "SNo": 1,
      "expenseAmount": "5000",
      "expenseDate": "2020/03/01",
      "Description": "",
      "uuid":uuid()
    },
    {
        "SNo": 2,
        "expenseAmount": "5000",
        "expenseDate": "2020/03/01",
        "Description": "",
        "uuid":uuid()
      },
      {
        "SNo": 3,
        "expenseAmount": "5000",
        "expenseDate": "2020/03/01",
        "Description": "",
        "uuid":uuid()
      },
      {
        "SNo": 4,
      "expenseAmount": "5000",
      "expenseDate": "2020/03/01",
      "Description": "",
      "uuid":uuid()
      },
      {
        "SNo": 5,
      "expenseAmount": "5000",
      "expenseDate": "2020/03/01",
      "Description": "",
      "uuid":uuid()
      },
      {
        "SNo": 6,
      "expenseAmount": "5000",
      "expenseDate": "2020/03/01",
      "Description": "",
      "uuid":uuid()
      },
      {
        "SNo": 7,
      "expenseAmount": "5000",
      "expenseDate": "2020/03/01",
      "Description": "",
      "uuid":uuid()
      },
      {
        "SNo": 8,
      "expenseAmount": "5000",
      "expenseDate": "2020/03/01",
      "Description": "",
      "uuid":uuid()
      },
      {
        "SNo": 9,
      "expenseAmount": "5000",
      "expenseDate": "2020/03/01",
      "Description": "",
      "uuid":uuid()
      },
      {
        "SNo": 10,
      "expenseAmount": "5000",
      "expenseDate": "2020/03/01",
      "Description": "",
      "uuid":uuid()
      }
    ];

class FinanceExpenditure extends Component {

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
        
      saveData = (e) =>{
        let {users, user} = this.state;
        let expenseAmount = user.expenseAmount;
        let expenseDate = user.expenseDate;
        let Description = user.Description;
           
            
        if(this.state.act ===0) {
          let user = {expenseAmount,expenseDate,Description}
          users.push(user);
        } else {
          let index = this.state.index;
          users[index].expenseAmount = expenseAmount;
          users[index].expenseDate = expenseDate;
          users[index].Description = Description;
         
            }

        console.log(this.state.users)
        this.setState({
          users:users,
          act:0,
          user: {...default_user}
        });} 
          
    
      
     
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
            <div>
            <div className="grid-2"></div>
                <div className="grid-10">
                    <div className="grid-10"></div>
                    <div className="filterData grid-2">
                        <button className="add_btn"type="button" onClick={this.showModal}><i class="fa fa-plus-circle" aria-hidden="true"></i>Expenditure</button>
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
                            <li>Expense Amount</li>
                            <li>Expense Date</li>
                            <li>Description</li>
                       </ul>
                    </div>
                    <div className="customerListInput grid-9">
                    <input type="text" name="expenseAmount" placeholder="Amount" onChange={this.onInputChange} value={this.state.user.expenseAmount}/><br/>
                    <input type="text" name="expenseDate" placeholder="yyyy-mm-dd" onChange={this.onInputChange} value={this.state.user.expenseDate} /><br/>
                    <input type="text" name="Description" placeholder="Description" onChange={this.onInputChange} value={this.state.user.Description}/><br/>
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
                            <th className="tableData">SNo</th>
                            <th className="tableData">Expense Amount</th>
                            <th className="tableData">Expense Date</th>
                            <th className="tableData">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, index)=>{
                        return (
                            <tr key={index} className="borderColor">
                            <td className="tableData">{index + 1}</td>
                            <td className="tableData"> {item.expenseAmount}</td>
                            <td className="tableData"> {item.expenseDate}</td>
                            <td className="tableData"> {item.Description}</td>
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


export default FinanceExpenditure
