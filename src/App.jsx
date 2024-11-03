
import { Button,FloatingLabel,Form } from 'react-bootstrap'
import './App.css'
import BikeDealers from './components/BikeDealers'

import BGImg from './assets/Bgimage2.png'
import logo from './assets/logo.webp'
import Service from './components/Service'



function App() {
  
  

  return (
    <>
      {/* Home */}
      <div >
        <div>
          {/* Overlay Div */}
          <div className='homeCont'>
            <h3 style={{color:'white'}}>POWERFULL </h3>
            <h2 style={{color:'orange'}}>MOTORCYCLES</h2>
            
            <Button variant="light">EXPLORE ALL <span className='arrow'>&#8594;</span></Button>
          </div>
          <div className='image-con'  >
            <img className='BgImg' src={BGImg} alt="" />
          </div>

        </div>
        <BikeDealers />
        <Service />
        <div style={{margin:'5% 0px'}} className='d-flex justify-content-center'>
          <div style={{backgroundColor:'#2A353B',width:'25vw',height:'25vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <img style={{width:'200px'}} src={logo} alt="" />
           <div className='fs-4 text-light icon'>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-instagram"></i>
           </div>
          </div>
          <div style={{backgroundColor:'orange',width:'65vw',height:'25vh',color:'white'}}>
            <p style={{fontSize:'1.3rem', marginTop:'6%',marginLeft:'30%'}}>2376, Indiana Avenue, Honolulu, Hawaii, 6814</p>
            <p style={{fontSize:'1.2rem', marginLeft:'36%'}}>© All Rights Reserved | Unsubscribe</p>
          </div>
        </div>
        
       
      </div>
    </>
  )
}

export default App
