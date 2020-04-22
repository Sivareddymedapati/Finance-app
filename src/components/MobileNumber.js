import React, { Component } from 'react'
import './Customers.css'
import Signin from '../components/Signin'
import MainData from '../components/MainData'
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import './Modal.css'
import './UserList.css'
Modal.setAppElement('#root')

class MobileNumber extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          mobile:"",
                }
    }
   
    updateMobile = (event) => {
        this.setState({mobile:event.target.value});
    }

  
       render() {
        const { show} = this.props;
        let filteredData = this.props.users.filter((user) => {return user.mobileNumber.indexOf(this.state.mobile) !== -1})
        
        return (
            <div>
                <Signin />
            <div>
            <div className="grid-2"></div>
            <div className="grid-10">
                <div className="filterData">
                    <ul className="label">
                        <li>Mobile Numbers List Details </li>
                    </ul>
                     <div className="labelInput">
                        <input className="filterInput mobileInput" type="text" name="mobile" placeholder="Enter mobile" value={this.state.mobile} onChange={this.updateMobile}/>
                    </div>       
                </div>
            </div>
            </div>
                <div>
                    <div className="grid-2"></div>
                    <div className="grid-10 table">
                    <table>
                      <tbody>
                        {filteredData.map((item, index)=>{
                        return (
                            <tr key={index} className="borderColor">
                            <td className="tableData mobileNumber"> {item.mobileNumber}</td>
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

export default MobileNumber
