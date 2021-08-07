import React from "react"
import cardBallon from './img/cardBallon.png'
import cardKey from './img/cardKey.png'
import cardLock from './img/cardLock.png'
import cardrul from './img/cardrul.png'
import cardset from './img/cardset.png'
import cardBattery from './img/cardvBattery.png'
import Car from './img/Car.png'
import oy from './img/oy.png'
import kubok from './img/kubok.png'
import cat from './img/cat.png'
import './body.css'

class Body extends React.Component{
    render(){
        return(
            <div className='box2'>
                <div className='body-card'>

                    <div className='card'>
                        <img src={cardKey} /> 
                    </div>

                    <div className='card'>
                        <img src={cardrul} /> 
                    </div>

                    <div className='card'>
                        <img src={cardset} /> 
                    </div>

                    <div className='card'>
                        <img src={cardBattery} /> 
                    </div>

                    <div className='card'>
                        <img src={cardBallon} /> 
                    </div>

                    <div className='card'>
                        <img src={cardLock} /> 
                    </div>

                </div>
 
               <div className='body'>
                   <div className='ferari-card'>
                       <div className='ferari-header'>Infiniti Renault<sup>TM</sup></div>
                       <img src={Car} width='800px'/>
                   </div>
                   <div className='ferari-body'>
                       <img className='fer-rasm' width='220px' src={cat}/>
                       <img className='fer-rasm' width='150px' src={oy}/>
                       <img className='fer-rasm' width='290px' src={kubok}/>
                   </div>
               </div>


            </div>
        )
    }
}

export default Body;