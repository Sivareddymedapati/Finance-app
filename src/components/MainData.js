import React, {Component} from 'react';
import Customers from '../components/Customers';
import uuid from 'uuid';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navigation from '../components/Navigation'
import Signin from './Signin'
import Login from '../components/Login'


const default_user= {
  id: '',
  customerName : '',
  fatherName: '',
  mobileNumber:'',
  village:''
}
const users = [
  {
    "id": 1,
    "customerName": "Zoey Benson",
    "fatherName": "Alexis Zamora",
    "mobileNumber": "9880989871",
    "village":'Hyderabad',
    "uuid":uuid()
  },
  {
    "id": 2,
    "customerName": "Dangelo Rollins",
    "fatherName": "Kailyn Shaffer",
    "mobileNumber": "9880989872",
    "village":'Banglore',
    "uuid":uuid()
  },
  {
    "id": 3,
    "customerName": "uSkylar Byrd",
    "fatherName": "Warren Villanueva",
    "mobileNumber": "9880989873",
    "village":'Pune',
    "uuid":uuid()
  },
  {
    "id": 4,
    "customerName": "Soren Rios",
    "fatherName": "Gregory Arellano",
    "mobileNumber": "9880989874",
    "village":'Pune',
    "uuid":uuid()
  },
  {
    "id": 5,
    "customerName": "Autumn Hull",
    "fatherName": "Jazlene Powers",
    "mobileNumber": "9880989875",
    "village":'Vishapatnam',
    "uuid":uuid()
  },
  {
    "id": 6,
    "customerName": "Zoey Benson",
    "fatherName": "Alexis Zamora",
    "mobileNumber": "9888888888",
    "village":'Kakinada',
    "uuid":uuid()
  },
  {
    "id": 7,
    "customerName": "Dangelo Rollins",
    "fatherName": "Kailyn Shaffer",
    "mobileNumber": "9880989000",
    "village":'Rajahmundry',
    "uuid":uuid()
  },
  {
    "id": 8,
    "customerName": "uSkylar Byrd",
    "fatherName": "Warren Villanueva",
    "mobileNumber": "9887778730",
    "village":'Delhi',
    "uuid":uuid()
  },
  {
    "id": 9,
    "customerName": "Soren Rios",
    "fatherName": "Gregory Arellano",
    "mobileNumber": "7777989874",
    "village":'Delhi',
    "uuid":uuid()
  },
  {
    "id": 10,
    "customerName": "Autumn Hull",
    "fatherName": "Jazlene Powers",
    "mobileNumber": "9880989875",
    "village":'Mysore',
    "uuid":uuid()
  }
];
class MainData extends Component {
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
    }
    console.log(this.state.users)
    this.setState({
      users:users,
      act:0,
      user: {...default_user}
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
     show: true
   })}
  
 
  render(){
    return (
      <Router>
      <Switch>
      <div>
        <Navigation/> 
        <Signin />
        <Route path="/" exact component={Login} />
        <Route path="/customers">
        <Customers show={this.state.show} hideModal={this.hideModal} showModal= {this.showModal} user={this.state.user} onInputChange={this.onDataChange} onSaveData={this.saveData}  users={this.state.users}  onFind={this.findData} />
        </Route>
        
      </div>
      </Switch>
    </Router>
      
    );
  }
}

export default MainData;
