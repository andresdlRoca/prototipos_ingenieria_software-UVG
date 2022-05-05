import React, {useState} from 'react'
import DefaultImageUser from '../../media/fulano.jpg'
import { FaQuestion } from 'react-icons/fa'

const CardServicios = (props) => {
    const {name, calification, isVerified, topPerformance, cobro, image} = props.tutor

    return (
      <div className='card-item-servicio'>
          <div className='left-side-card-servicio'>
            <div className='card-item-image-space-service' style={(image)?{backgroundImage: `url(${image})`, backgroundSize: 'cover'}: {backgroundImage: `url(${DefaultImageUser})`, backgroundSize: 'cover'}}/>
            <div className='performances-bars-containers'>
              {
                Object.keys(topPerformance).map((key)=>{
                  return <div className='progress-bar-container'> 
                  <div className='text-into-progressbar'> {key}</div>
                  <div className='progress-fill'style={{height: "100%", width: `${100*topPerformance[key]/5}%`}}/> 
                  </div>
                })
              }

            </div>
          </div>
      </div>
  
    )
}

export default CardServicios