import React from "react"
import sidebarLogo from './img/sidebarLogo.png'
import account from './img/account.png'
import './sidebar.css'

class Sidebar extends React.Component{
    render(){
        return(
            <div className='box1'>
                <div className='sidebar-logo-text'>
                     <img src={sidebarLogo} className='sidebar-logo' alt='sidebar-logo' />
                     <p className='sidebar-text'>iffee</p>
                </div>

               <div className='sidebar-menu'>
                <h1 className='sidebar-header'>Menu</h1>

                <div className='Menu1'>
                    <i  className='fa fa-home icon'/>
                    <p className='icon-wrapp'>Home</p>
                </div>

                <div className='Menu1'>
                    <i  className='fa fa-th-large icon'/>
                    <p className='icon-wrapp'>Garage</p>
                </div>

                <div className='Menu1'>
                    <i  className='fa fa-floppy-o icon'/>
                    <p className='icon-wrapp'>Service Menu</p>
                </div>

                <div className='Menu1'>
                    <i  className='fa fa-user icon'/>
                    <p className='icon-wrapp'>Racers</p>
                </div>

                <div className='Menu1'>
                    <i  className='fa fa-calculator	 icon'/>
                    <p className='icon-wrapp'>Calculator</p>
                </div>

                <div className='Menu1'>
                    <i  className='fa fa-gear icon'/>
                    <p className='icon-wrapp'>Settings</p>
                </div>

                <div className='Bar'>

                    <h1 className='Bar-title'>Scheduled Races</h1>

                    <div className='Bar-box'>
                      <i className='fa fa-circle-thin bar-icon1'/>
                       <p className='Bar-wrapp'>MotoGP 2022</p>
                    </div>

                    <div className='Bar-box'>
                      <i className='fa fa-circle-thin bar-icon2'/>
                       <p className='Bar-wrapp'>Dynamics 22</p>
                    </div>

                    <div className='Bar-box'>
                      <i className='fa fa-circle-thin bar-icon3'/>
                       <p className='Bar-wrapp'>Olympics</p>
                    </div>
                       
                </div>

                  <div className='coment'>
                      <img src={account} className='coment-img' alt='account'/>
                      <p className='coment-item'>Killua</p>
                      <i className='fa fa-chevron-down com-icon'/>
                  </div>

               </div>

            </div>
        )
    }
}

export default Sidebar;