import React, {Component} from 'react';
import Customers from '../components/Customers';
import Prize from '../components/Prize';
import FinanceExpenditure from '../components/FinanceExpenditure'
import FinanceToCustomers from '../components/FinanceToCustomers'
import uuid from 'uuid';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import Navigation from '../components/Navigation'
import Signin from './Signin'
import Login from '../components/Login'
import MobileNumber from '../components/MobileNumber'
import CustomerReport from '../components/CustomerReport'
import PaymentsByIndividuals from '../components/PaymentsByIndividuals'
import CustomerReportData from '../components/CustomerReportData'
import {users, default_user} from '../data/Users'
import {usersfinance, default_userfinance} from '../data/Usersfinance'
import {userspayment, default_userpayment} from '../data/Userspayment'


class MainData extends Component {
  constructor(){
    super();
    this.state = {users,
                  user: {...default_user},
                  act:0,
                  index:'',
                  show: false,
                  userspayment,
                  userpayment: {...default_userpayment},
                  actpayment:0,
                  indexpayment:'',
                  usersfinance,
                  userfinance: {...default_userfinance},
                  actfinance:0,
                  indexfinance:'',
                  showfinance: false,
                  userfinance1: {...default_userfinance},
                  actfinance1:0,
                  indexfinance1:'',
                  showfinance1: false,
                  userpayment1: {...default_userpayment},
                  actpayment1:0,
                  indexpayment1:'',
                  showpayment1: false,
                  scheme:'',
                  reportid:'',
                  report:false,
                  userDetails:'',
                  userFinance:'',
                  userPayment:'',
                  paidamount:'',
                  financeamount:'',
                  actualamount:'',
                  customersEditBtn:false,
                  financeEditBtn:false,
                 }
  }

  updateScheme = (event) => {
    this.setState({
        scheme:event.target.value,
        
    })
}

  showModal = () => {
    this.setState({ 
      show: true, 
      customersEditBtn:false,});
    
  }
  
  hideModal = () => {
    this.setState({ 
      show: false,
      user: {...default_user},
      act:0
     });
  }

  onDataChange = (e)=>{
    const {target} = e;
    this.setState({
      user:{...this.state.user,[target.name]:target.value}
    })
    };
    
  saveData = (e) =>{
    let {users, user} = this.state;
    let id = user.id;
    let customerName = user.customerName;
    let fatherName = user.fatherName;
    let mobileNumber = user.mobileNumber;
    let village = user.village;

    if(this.state.act ===0) {
      let user = {id,customerName,fatherName,mobileNumber,village}
      users.push(user);
      
    } else {
      let index = this.state.index;
      users[index].id = id;
      users[index].customerName = customerName;
      users[index].fatherName = fatherName;
      users[index].mobileNumber = mobileNumber;
      users[index].village = village;
      this.setState({customersEditBtn:true})
    }
    console.log(this.state.users)
    this.setState({
      users:users,
      act:0,
      user: {...default_user},

    });

  }
 
  findData = (index,uuid) =>{
   console.log(index)
   let user = users.find(task => task.uuid === uuid)
   console.log(user)
   this.setState({
     act:1,
     index:index,
     user:user,
     show: true,
     customersEditBtn:true
   })}
  
   onInputChangepayment = (e)=>{
    const {target} = e;
    this.setState({
        userpayment:{...this.state.userpayment,[target.name]:target.value}
    })
    };
    
  saveDatapayment = (e, props) =>{
    let validate = this.state.users.map((item) => {return item.id == this.state.userpayment.id})
    let valid = validate.indexOf(true) 
    let {userspayment, userpayment} = this.state;
    let id = userpayment.id;
    let term = userpayment.term;
    let paidDate = userpayment.paidDate;
    let amount = parseInt(userpayment.amount);
    ;

       
    if (valid !== -1) {    
    if(this.state.actpayment ===0) {
      let userpayment = {id,term,paidDate,amount}
      userspayment.push(userpayment);
    } else {
      let index = this.state.index;
      userspayment[index].id = id;
      userspayment[index].term = term;
      userspayment[index].paidDate = paidDate;
      userspayment[index].amount = amount;
        }

    console.log(this.state.userspayment)
    this.setState({
      userspayment:userspayment,
      actpayment:0,
      userpayment: {...default_userpayment}
    });} 
    else {alert("Enter valid Customer id")}} 
      

    showModalfinance = () => {
      this.setState({ 
        showfinance: true,
        financeEditBtn:false });
    }
    
    hideModalfinance = () => {
      this.setState({ 
        showfinance: false,
        userfinance: {...default_userfinance},
        actfinance:0
       });
    }
  
    onInputChangefinance = (e)=>{
      const {target} = e;
      this.setState({
          userfinance:{...this.state.userfinance,[target.name]:target.value}
      })
      };
      
    saveDatafinance = (e, props) =>{
      let validate = this.state.users.map((item) => {return item.id == this.state.userfinance.id})
      let valid = validate.indexOf(true) 
      let {usersfinance, userfinance} = this.state;
      let id = userfinance.id;
      let Name = this.state.users.filter((user) => {return user.id == this.state.userfinance.id})
      let customerName = Name.map((user) => {return user.customerName})
      console.log(customerName)
      console.log(Name)
      let paymentDate = userfinance.paymentDate;
      let amount = parseInt(userfinance.amount);
      let paymentType = userfinance.paymentType;

         
      if (valid !== -1) {    
      if(this.state.actfinance ===0) {
        let userfinance = {id,customerName,paymentDate,amount,paymentType}
        usersfinance.push(userfinance);
      } else {
        let index = this.state.indexfinance;
        usersfinance[index].id = id;
        usersfinance[index].customerName = customerName;
        usersfinance[index].paymentDate = paymentDate;
        usersfinance[index].amount = amount;
        usersfinance[index].paymentType = paymentType;
       
          }

      console.log(this.state.usersfinance)
      this.setState({
        usersfinance:usersfinance,
        actfinance:0,
        userfinance: {...default_userfinance}
      });} else {alert("Enter valid Customer id")}} 
        
  
    deleteItemfinance = (index) =>{
       const newList = usersfinance.splice(index,1)
       this.setState({
        usersfinance:usersfinance
       })
    }
 
      
    findDataFinance = (index,uuid) =>{
     
     let userfinance = usersfinance.find((task) => {return task.uuid == uuid})
     console.log(userfinance)
     this.setState({
       actfinance:1,
       indexfinance:index,
       userfinance:userfinance,
       showfinance: true,
       financeEditBtn: true
     });
  }

  showModalfinance1 = () => {
    this.setState({ showfinance1: true });
  }
  
  hideModalfinance1 = () => {
    this.setState({ 
      showfinance1: false,
      userfinance1: {...default_userfinance},
      actfinance1:0
     });
  }

  onInputChangefinance1 = (e)=>{
    const {target} = e;
    this.setState({
        userfinance1:{...this.state.userfinance1,[target.name]:target.value}
    })
    };
    
  saveDatafinance1 = (e, props) =>{
    
    let {usersfinance, userfinance1,userPayment,userFinance} = this.state;
    let id = userfinance1.id;
    let customerName = userfinance1.customerName;
    let paymentDate = userfinance1.paymentDate;
    let amount = parseInt(userfinance1.amount);
    let paymentType = userfinance1.paymentType;
    let index = this.state.indexfinance1;
      usersfinance[index].id = id;
      usersfinance[index].customerName = customerName;
      usersfinance[index].paymentDate = paymentDate;
      usersfinance[index].amount = amount;
      usersfinance[index].paymentType = paymentType;
       

    console.log(this.state.usersfinance)
    this.setState({
      usersfinance:usersfinance,
      actfinance1:0,
      userfinance1: {...default_userfinance}
    });
    let paymentamount = userPayment.map((user) => {return user.amount})
    let paidamount = paymentamount.reduce((total,value) => {return total+value})
    let financepayment = userFinance.map((user) => {return user.amount})
    let financeamount = financepayment.reduce((total,value) => {return total+value})
    let actualamount = (paidamount)-(financeamount)
    this.setState({
      paidamount:paidamount,
      financeamount:financeamount,
      actualamount:actualamount})}
      

   findDataFinance1 = (index,uuid) =>{
   
   let userfinance1 = this.state.userFinance.find((task) => {return task.uuid == uuid})
   console.log(userfinance1)
   this.setState({
     actfinance1:1,
     indexfinance1:index,
     userfinance1:userfinance1,
     showfinance1: true,
     
     
   });
}

deleteItemfinance1 = (index,uuid) =>{
  let {userspayment, userpayment1,usersfinance,userPayment,userFinance,reportid} = this.state;
  const newList = usersfinance.filter((user) => {return user.uuid !== uuid})
  let Finance = newList.filter((task) => {return task.id == reportid} )
   
  this.setState({
    usersfinance:newList,
    userFinance:Finance,
  })    
  
    let paymentamount = userPayment.map((user) => {return user.amount})
    let paidamount = paymentamount.reduce((total,value) => {return total+value})
    let financepayment = Finance.map((user) => {return user.amount})
    let financeamount = financepayment.reduce((total,value) => {return total+value})
    let actualamount = (paidamount)-(financeamount) 
    this.setState({
      paidamount:paidamount,
      financeamount:financeamount,
      actualamount:actualamount,
    })
    
}


deleteItemPayments = (index,uuid) =>{
  let {userspayment, userpayment1,usersfinance,userPayment,userFinance,reportid} = this.state;
  const newList = userspayment.filter((user) => {return user.uuid !== uuid})
  let Payment = newList.filter((task) => {return task.id == reportid} )
   
  this.setState({
    userspayment:newList,
    userPayment:Payment,
  })    
  
    let paymentamount = Payment.map((user) => {return user.amount})
    let paidamount = paymentamount.reduce((total,value) => {return total+value})
    let financepayment = userFinance.map((user) => {return user.amount})
    let financeamount = financepayment.reduce((total,value) => {return total+value})
    let actualamount = (paidamount)-(financeamount) 
    this.setState({
      paidamount:paidamount,
      financeamount:financeamount,
      actualamount:actualamount,
    })
}

showModalpayment1 = () => {
  this.setState({ showpayment1: true });
}

hideModalpayment1 = () => {
  this.setState({ 
    showpayment1: false,
    userpayment1: {...default_userpayment},
    actpayment1:0
   });
}

onInputChangepayment1 = (e)=>{
  const {target} = e;
  this.setState({
      userpayment1:{...this.state.userpayment1,[target.name]:target.value}
  })
  };
  
saveDatapayment1 = (e, props) =>{
  
  let {userspayment, userpayment1,userPayment,userFinance} = this.state;
  let id = userpayment1.id;
  let term = userpayment1.term;
  let paidDate = userpayment1.paidDate;
  let amount = parseInt(userpayment1.amount);
  let index = this.state.indexpayment1;
    userspayment[index].id = id;
    userspayment[index].term = term;
    userspayment[index].paidDate = paidDate;
    userspayment[index].amount = amount;
    
     

  console.log(this.state.userspayment)
  this.setState({
    userspayment:userspayment,
    actpayment1:0,
    userpayment1: {...default_userpayment}
  });
    let paymentamount = userPayment.map((user) => {return user.amount})
    let paidamount = paymentamount.reduce((total,value) => {return total+value})
    let financepayment = userFinance.map((user) => {return user.amount})
    let financeamount = financepayment.reduce((total,value) => {return total+value})
    let actualamount = (paidamount)-(financeamount)
    this.setState({
      paidamount:paidamount,
      financeamount:financeamount,
      actualamount:actualamount
    })}
    



findDatapayment1 = (index,uuid) =>{
 
 let userpayment1 = this.state.userPayment.find((task) => {return task.uuid == uuid})
 console.log(userpayment1)
 this.setState({
   actpayment1:1,
   indexpayment1:index,
   userpayment1:userpayment1,
   showpayment1: true,
   
   
 });
}

  findUser = (id) =>{
    console.log(id)
    let Details = this.state.users.filter((task) => {return task.id == id})
    let Finance = this.state.usersfinance.filter((task) => {return task.id == id} )
    let Payment = this.state.userspayment.filter((task) => {return task.id ==id})
    let paymentamount = Payment.map((user) => {return user.amount})
    let paidamount = paymentamount.reduce((total,value) => {return total+value})
    let financepayment = Finance.map((user) => {return user.amount})
    let financeamount = financepayment.reduce((total,value) => {return total+value})
    let actualamount = (paidamount)-(financeamount)

    this.setState({
      reportid:id,
      userDetails:Details,
      userFinance:Finance,
      userPayment:Payment,
      report:true,
      paidamount:paidamount,
      financeamount:financeamount,
      actualamount:actualamount
    })
    console.log(this.state.userDetails)
    console.log(this.state.userFinance)
    console.log(this.state.userPayment)
  }

  ViewList = () => {
    this.setState({
      report:false
    })
  }

  

   render(){ if(this.props.valid) {return <Redirect to='/customers' />}
    return ( 
      
        <Switch>
          <div>
            <Navigation scheme={this.state.scheme} ViewList={this.ViewList}/> 
            <Route path="/" customers>
              <Customers customersEditBtn = {this.state.customersEditBtn} show={this.state.show} hideModal={this.hideModal} showModal= {this.showModal} user={this.state.user} onInputChange={this.onDataChange} onSaveData={this.saveData}  users={this.state.users}  onFind={this.findData} />
            </Route>
            <Route path="/prize" exact>
              <Prize users={this.state.users}/>
            </Route>  
            <Route path="/FinanceExpenditure" exact>
              <FinanceExpenditure />
            </Route>
            <Route path="/FinanceToCustomers" exact>
              <FinanceToCustomers financeEditBtn={this.state.financeEditBtn} deleteItem = {this.deleteItemfinance} userfinance={this.state.userfinance} usersfinance={this.state.usersfinance} showfinance={this.state.showfinance} showModalfinance={this.showModalfinance} hideModalfinance={this.hideModalfinance} onInputChange={this.onInputChangefinance} saveData={this.saveDatafinance} findData={this.findDataFinance}/>
            </Route>
            <Route path="/mobile" exact>
              <MobileNumber users={this.state.users}/>
            </Route>
            <Route path="/customerReport" exact>
              <ReportDisplay deleteItemPayments ={this.deleteItemPayments} deleteItem = {this.deleteItemfinance1} ViewList={this.ViewList}  financeamount={this.state.financeamount} actualamount={this.state.actualamount} paidamount={this.state.paidamount} findDatapayment1={this.findDatapayment1} userpayment1={this.state.userpayment1} userspayment={this.state.userspayment} showpayment1={this.state.showpayment1} showModalpayment1={this.showModalpayment1} hideModalpayment1={this.hideModalpayment1} onInputChangepayment1={this.onInputChangepayment1} saveDatapayment1={this.saveDatapayment1} findDataFinance1={this.findDataFinance1} userfinance1={this.state.userfinance1} usersfinance={this.state.usersfinance} showfinance1={this.state.showfinance1} showModalfinance1={this.showModalfinance1} hideModalfinance1={this.hideModalfinance1} onInputChangefinance1={this.onInputChangefinance1} saveDatafinance1={this.saveDatafinance1}  userDetails={this.state.userDetails} userFinance={this.state.userFinance} userPayment={this.state.userPayment} report={this.state.report}   users={this.state.users}  findUser={this.findUser}/>
            </Route>
            <Route path="/paymentsByIndividuals" exact>
              <PaymentsByIndividuals userpayment={this.state.userpayment} userspayment={this.state.userspayment} onInputChange={this.onInputChangepayment} saveData={this.saveDatapayment} />
            </Route>
            
          </div>
        </Switch>
    
      
    );
  }
}

export default MainData;

function ReportDisplay(props){

  if(props.report) {return <CustomerReportData deleteItemPayments ={props.deleteItemPayments} deleteItem = {props.deleteItem} ViewList={props.ViewList} paidamount={props.paidamount} financeamount={props.financeamount} actualamount={props.actualamount} showpayment1={props.showpayment1} showModalpayment1={props.showModalpayment1} hideModalpayment1={props.hideModalpayment1} findDatapayment1={props.findDatapayment1} userpayment1={props.userpayment1} userspayment={props.userspayment}  onInputChangepayment1={props.onInputChangepayment1} saveDatapayment1={props.saveDatapayment1} showfinance1={props.showfinance1} showModalfinance1={props.showModalfinance1} hideModalfinance1={props.hideModalfinance1} findDataFinance1={props.findDataFinance1} userfinance1={props.userfinance1} usersfinance={props.usersfinance}  onInputChangefinance1={props.onInputChangefinance1} saveDatafinance1={props.saveDatafinance1}  userDetails={props.userDetails} userFinance={props.userFinance} userPayment={props.userPayment} users={props.users}/>} else {return <CustomerReport  userspayment={props.userspayment} users={props.users}  findUser={props.findUser}/>}
}