import React from 'react'
import { Button,FloatingLabel,Form } from 'react-bootstrap'
import "./Service.css"
import img1 from '../assets/b1.webp'
import img2 from '../assets/b2.webp'
import img3 from '../assets/b3.webp'
import videoImg from '../assets/video.webp'
import testImg from '../assets/serv.webp'
import localImg from '../assets/local.jpg'
import { useState } from 'react'
const Service = () => {
  const [displayContact,setDisplayContact]=useState(false)

  const contactDetails =()=>{
    setDisplayContact(prev => !prev);

  }
  return (
    <div className='service-cont mt-5'>
        <h1 className='text-center'>FIND A DEALER</h1>
        <div className='serv-items d-flex justify-content-center mt-5'>
            <div className='serv-item'>
                <img src={img1} alt="" />
                <h4 className='text-center pt-3 pb-2'>DEALER SHOP</h4>
                <p className='text-center text-secondary'>182, Park Town Hall, <br /> Alaska, USA.</p>
                <h6 className='text-center text-warning pb-3'>+123 456 789</h6>
            </div>
            <div className='serv-item mx-4'>
            <img src={img2} alt="" />
            <h4 className='text-center pt-3 pb-2'>DEALER SHOP</h4>
            <p className='text-center text-secondary'>186, Park Avenue, <br /> New York, USA.</p>
            <h6 className='text-center text-warning pb-3'>+123 456 789</h6>
            </div>
            <div className='serv-item'>
            <img src={img3} alt="" />
            <h4 className='text-center pt-3 pb-2'>DEALER SHOP</h4>
            <p className='text-center text-secondary'>192, Park Town Hall, <br /> Alaska, USA.</p>
            <h6 className='text-center text-warning pb-3'>+123 456 789</h6>
            </div>
        </div>
        <div className='free-serv'>
            <h2 className='text-center text-light pt-5 pb-3'>FREE SERVICES</h2>
            <p className='text-center text-light pb-2'>Get unlimited free services for 12 Months</p>
            <div className='d-flex justify-content-center  align-items-center'><button style={{backgroundColor:'orangered'}} className=' text-light fw-bolder px-3 py-2  border-0'>BOOK YOUR ORDER NOW <span className='fw-bolder fs-4'>&#8594;</span></button></div>
            <p className='text-center text-light py-4'>This is limited time offer only</p>
        </div>
        <div>
          <h1 className='text-center mt-5'>WATCH OUR VIDEO</h1>
         <div className='d-flex justify-content-center my-5'> <img style={{width:'60vw'}} src={videoImg} alt="" /></div>
         <div  className='d-flex justify-content-center mt-5'><img style={{width:'70vw'}} src={testImg} alt="" /></div>
         <h4 className='text-center mt-5'>WHY ARE YOU WAITING? GET</h4>
         <div className='d-flex justify-content-center'><button style={{fontWeight:'600',backgroundColor:'orangered'}} className='text-center  text-light py-2 px-5 fs-4 border border-0 mt-3 '>TEST DRIVE TODAY</button></div>
         <div className='d-flex justify-content-center align-items-center'><button  className=' text-dark fw-bolder px-3 py-1 mt-4'>BOOK NOW <span className='fw-bolder fs-4'>&#8594;</span></button></div>
          </div>
          <div>
            <div style={{marginTop:'5%',position:'relative'}} >
              <img className='localImg' src={localImg} alt="" />
              <div style={{position:'absolute',color:'white',backgroundColor:'#2A353B',top:'70%',left:'50%',transform:'translate(-50%)',padding:'2rem',width:'55%'}}>
                <h2 style={{fontWeight:'700'}} className='text-center mb-4'>FIND YOUR LOCAL DEALERSHIP</h2>
                <div className='d-flex justify-content-center  align-items-center'><button onClick={contactDetails} style={{backgroundColor:'white'}} className='  px-3 py-1  border-0'>CLICK HERE <span className='fw-bolder fs-4'>&#8594;</span></button></div>
              </div>
              </div>
          </div>

          {displayContact && ( <div style={{backgroundColor:'#2A353B',padding:'1rem',width:'30%',margin:'50px 50% ',transform:'translateX(-50%)',borderRadius:'20px'}}>
        
          <FloatingLabel
          controlId="floatingInput"
          label="Name"
          className="mb-3">
          <Form.Control type="text" placeholder="Name" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Mobile Number" className="mb-3">
          <Form.Control type="number" placeholder="Number" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Location" >
          <Form.Control type="text" placeholder="Location" />
        </FloatingLabel>
        <div className='d-flex justify-content-center mt-3'><Button style={{backgroundColor:'orange',border:'solid white 2px '}}>SUBMIT</Button></div>
        
        </div>
        )}
    </div>
  )
}

export default Service