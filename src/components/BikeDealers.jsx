import React from 'react'
import "./BikeDealers.css"
import bike1 from '../assets/bike1.jpeg'
import bike2 from '../assets/bike2.jpg'
import bike3 from '../assets/bike3.jpeg'
const BikeDealers = () => {
  return (
    <div className='dealer-cont'>
      <h1 className='text-center mt-5'>OUR NEW ARRIVAL</h1>
      <div className='items d-flex justify-content-around mt-5 '>
        <div className='item '>
          <img src={bike1} alt="" />
          <h4 className='text-center pt-4 pb-2'>CLASSIC MOTORCYCLE</h4>
          <div className='d-flex justify-content-center align-items-center mb-3'><button className='bg-warning text-light fw-bolder px-2  border-0'>BOOK NOW <span className='fw-bolder fs-4'>&#8594;</span></button></div>
        </div>
        <div className='item '>
        <img src={bike2} alt="" />
          <h4 className='text-center pt-4 pb-2'>SPORTS MOTORCYCLE</h4>
          <div className='d-flex justify-content-center align-items-center mb-3'><button className='bg-warning text-light fw-bolder px-2  border-0'>BOOK NOW <span className='fw-bolder fs-4'>&#8594;</span></button></div>
        </div>
      </div>
     <div className='custom-cont '> 
       <div className='custom '>
        <img src={bike3} alt="" />
        </div> 
       <div style={{backgroundColor:'#2A353B'}} className='  custom'>
        <h1 className='custom-headings text-light'>CUSTOMIZED <br /> <span className='text-warning'>MOTORCYCLES <br /> </span> SPECIALLY <br />
         DESIGNED FOR <br /> YOUR RIDE</h1>
         <div className='d-flex  align-items-center ms-5'><button className='bg-warning text-light fw-bolder px-2  border-0'>FIND OUT MORE <span className='fw-bolder fs-4'>&#8594;</span></button></div>
       </div>
       </div>
    </div>
  )
}

export default BikeDealers