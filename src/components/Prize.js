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


const default_userPrize= {
    id: '',
    prizeName : '',
    Date: '',
    prizeAmount:'',
    paidAmount:'',
    term:''
  }
  const usersPrize = [
    {
      "id": 1,
      "prizeName": "Zoey Benson",
      "Date": "2020/03/01",
      "prizeAmount": "10000",
      "paidAmount":'5000',
      "term":5,
      "uuid":uuid()
    },
    {
      "id": 2,
      "prizeName": "Dangelo Rollins",
      "Date": "2020/03/01",
      "prizeAmount": "10000",
      "paidAmount":'5000',
      "term":5,
      "uuid":uuid()
      },
      {
      "id": 3,
      "prizeName": "uSkylar Byrd",
      "Date": "2020/03/01",
      "prizeAmount": "10000",
      "paidAmount":'5000',
      "term":5,
      "uuid":uuid()
      },
      {
        "id": 4,
        "prizeName": "Soren Rios",
        "Date": "2020/03/01",
        "prizeAmount": "10000",
        "paidAmount":'5000',
        "term":5,
        "uuid":uuid()
      },
      {
        "id": 5,
        "prizeName": "Autumn Hull",
        "Date": "2020/03/01",
        "prizeAmount": "10000",
        "paidAmount":'5000',
        "term":5,
        "uuid":uuid()
      },
      {
        "id": 6,
        "prizeName": "Zoey Benson",
        "Date": "2020/03/01",
        "prizeAmount": "10000",
        "paidAmount":'5000',
        "term":5,
        "uuid":uuid()
      },
      {
        "id": 7,
        "prizeName": "Dangelo Rollins",
        "Date": "2020/03/01",
        "prizeAmount": "10000",
        "paidAmount":'5000',
        "term":5,
        "uuid":uuid()
      },
      {
        "id": 8,
        "prizeName": "uSkylar Byrd",
        "Date": "2020/03/01",
        "prizeAmount": "10000",
        "paidAmount":'5000',
        "term":5,
        "uuid":uuid()
      },
      {
        "id": 9,
        "prizeName": "Soren Rios",
        "Date": "2020/03/01",
        "prizeAmount": "10000",
        "paidAmount":'5000',
        "term":5,
        "uuid":uuid()
      },
      {
        "id": 10,
        "prizeName": "Autumn Hull",
        "Date": "2020/03/01",
        "prizeAmount": "10000",
        "paidAmount":'5000',
        "term":5,
        "uuid":uuid()
      }
    ];

class Prize extends Component {

    constructor(){
        super();
        this.state = {usersPrize,
                      userPrize: {...default_userPrize},
                      act:0,
                      index:'',
                      show: false,
                      prizeEditBtn:false,
                      }
      }
    
      showPrizeModal = () => {
        this.setState({ 
          show: true,
          prizeEditBtn:false,});
      }
      
      hidePrizeModal = () => {
        this.setState({ 
          show: false,
          userPrize: {...default_userPrize},
          act:0
         });
      }
    
      onInputChange = (e)=>{
        const {target} = e;
        this.setState({
            userPrize:{...this.state.userPrize,[target.name]:target.value}
        })
        };
        
    
    
      saveData = (e,props) =>{
       
        console.log(this.state.userPrize.id);
        
        let validate = this.props.users.map((task) => { return (task.id == this.state.userPrize.id)})
        console.log(validate.indexOf(true))
        let valid = validate.indexOf(true) 

        if (valid !== -1) {
        let {usersPrize, userPrize} = this.state;
        let id = userPrize.id;
        let prizeName = userPrize.prizeName;
        let Date = userPrize.Date;
        let prizeAmount = userPrize.prizeAmount;
        let paidAmount = userPrize.paidAmount;
        let term = userPrize.term;

           
        if(this.state.act ===0) {
          let userPrize = {id,prizeName,Date,prizeAmount,paidAmount,term}
          usersPrize.push(userPrize);
        } else {
          let index = this.state.index;
          usersPrize[index].id = id;
          usersPrize[index].prizeName = prizeName;
          usersPrize[index].Date = Date;
          usersPrize[index].prizeAmount = prizeAmount;
          usersPrize[index].paidAmount = paidAmount;
          usersPrize[index].term = term;
        }
        console.log(this.state.usersPrize)
        this.setState({
          usersPrize:usersPrize,
          act:0,
          userPrize: {...default_userPrize}
        });} 

        else {alert("Invalid Customer Id")}
      }
          
    
      
     
      findData = (index,uuid) =>{
       console.log(index)
       let userPrize = usersPrize.find(task => task.uuid === uuid)
       console.log(userPrize)
       this.setState({
         act:1,
         index:index,
         userPrize:userPrize,
         show: true,
         prizeEditBtn:true,
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
                        <button className="add_btn"type="button" onClick={this.showPrizeModal}><i class="fa fa-plus-circle" aria-hidden="true"></i>Add Prize</button>
                    </div>
                </div>
            </div>
            <div className="dataForm">
                <div className="grid-2"></div>  
                <div className="grid-10">
                <Modal isOpen={this.state.show} handleClose={this.state.show} className ="modal" >

                <div className="customersForm">
                    <div>
                    <div className="grid-3">
                        <ul className="customerListLabel">
                            <li>Id</li>
                            <li>Prize Name</li>
                            <li>Date</li>
                            <li>Prize Amount</li>
                            <li>Paid Amount</li>
                            <li>Term</li>
                        </ul>
                    </div>
                    <div className="customerListInput grid-8">
                    <input type="text" name="id" placeholder="Customer Id" onChange={this.onInputChange} value={this.state.userPrize.id}/> <br/>        
                    <input type="text" name="prizeName" placeholder="Prize Name" onChange={this.onInputChange} value={this.state.userPrize.prizeName}/><br/>
                    <input type="date" name="Date" placeholder="yyyy-mm-dd" onChange={this.onInputChange} value={this.state.userPrize.Date} /><br/>
                    <input type="text" name="prizeAmount" placeholder="Prize Amount" onChange={this.onInputChange} value={this.state.userPrize.prizeAmount}/><br/>
                    <input type="text" name="paidAmount" placeholder="Paid Amount" onChange={this.onInputChange} value={this.state.userPrize.paidAmount}/><br/>
                    <input type="text" name="term" placeholder="Term" onChange={this.onInputChange} value={this.state.userPrize.term}/><br/>
                    </div>
                    <div>
                     <div className="grid-1"></div> 
                    <div><i class="fa fa-window-close-o" aria-hidden="true" onClick={this.hidePrizeModal}></i></div>
                    </div>
                    </div>
                    <div className="grid-5"></div>
        <div className="grid-2 savebtn"><button type="button" className={this.state.prizeEditBtn ? "greenActive":"saveBtn"} onClick={this.saveData}>{this.state.prizeEditBtn ? "Update":"Save"}</button></div>
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
                        <th className="tableData">Prize Name</th>
                        <th className="tableData">Date</th>
                        <th className="tableData">Prize Amount</th>
                        <th className="tableData">Paid Amount</th>
                        <th className="tableData">Term</th>
                        <th className="tableData">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersPrize.map((item, index)=>{
                        return (
                            <tr key={index} className="borderColor">
                            <td className="tableData">{item.id}</td>
                            <td className="tableData"> {item.prizeName}</td>
                            <td className="tableData"> {item.Date}</td>
                            <td className="tableData"> {item.prizeAmount}</td>
                            <td className="tableData"> {item.paidAmount}</td>
                            <td className="tableData"> {item.term}</td>
                            <td className="tableData"> <button className="updateBtn" type="button" ><i className="updateBtn" onClick={() => this.findData(index,item.uuid)} class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>
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


export default Prize
