import React from "react"
import navbarImg from './img/navbarImg.png'
import './navbar.css'


class Navbar extends React.Component{
    render(){
        return(
            <div className='box3'>
                <div className='nav-input1'>
                <i className='fa fa-search'/>
                <input placeholder='Search for a race, car or racer' className='input1' type='text'/>
                </div>
                <div className='nav-input2'>
                <input placeholder='Choose a car' className='input2' type='text' />
                <i className='box3-icon fa fa-chevron-down '/>
                </div> 
               <img src={navbarImg} width='200px' />
            </div>
        )
    }
}

export default Navbar;