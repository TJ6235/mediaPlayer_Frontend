
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol,} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone ,faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faPrint ,faDroplet} from '@fortawesome/free-solid-svg-icons';
import { faStar ,faHippo } from '@fortawesome/free-solid-svg-icons';
import { faGhost,faMugHot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../App.css'



function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
    <section style={{ borderBottom: '1px solid #FF8C00' }} className='d-flex justify-content-center justify-content-lg-between p-4'>
      <div className='me-5 d-none d-lg-block'>
        <span>Get connected with us on social networks :</span>
      </div>

      <div>
        <a  className='me-4 text-reset'>
        <FontAwesomeIcon className='me-2 text-warning' icon={faSnowflake} />      
        </a>
        <a  className='me-4 text-reset'>
        <FontAwesomeIcon className='me-2 text-warning' icon={faHippo} />        
        </a>
        <a  className='me-4 text-reset'>
        <FontAwesomeIcon className='me-2 text-warning' icon={faStar} />  
       </a>
        <a  className='me-4 text-reset'>
        <FontAwesomeIcon className='me-2 text-warning' icon={faGhost} />    
        </a>
        <a  className='me-4 text-reset'>
        <FontAwesomeIcon className='me-2 text-warning' icon={faMugHot} />
        </a>
        <a  className='me-4 text-reset'>
        <FontAwesomeIcon className='me-2 text-warning' icon={faDroplet} />   
        </a>
      </div>
    </section>

    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4 text-warning'>
            <FontAwesomeIcon className='me-2' icon={faSuitcase} />
              Media Player
            </h6>
            <p>
             This  media Player is a software application designed to manage, play, and share various forms of digital media, such as music,
              videos, and photos. It often includes Many other  features 
               
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
            <Link className='aaaaaa' to={'/'}>
            <p >
               Landing Page
            </p>
            </Link>
            <Link className='aaaaaa' to={'/home'}>
            <p>
                HomePage
            </p>
            </Link>
            <Link className='aaaaaa' to={'/watchhistory'}>
            <p>
               Watch History
             
            </p>
            </Link>
            <p>
                Lists
            </p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
            <p>
              <a href='#!' className='text-reset'>
                Pricing
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Settings
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Orders
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Help
              </a>
            </p>
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact  Us</h6>
            <p>
            <FontAwesomeIcon className='me-2 text-warning' icon={faHouse} />
              New York, NY 10012, US
            </p>
            <p>
            <FontAwesomeIcon className='me-2 text-warning' icon={faEnvelope} />
              info@example.com
            </p>
            <p>
            <FontAwesomeIcon className='me-2 text-warning' icon={faPhone} />
            + 01 653 367 65
            </p>
            <p>
            <FontAwesomeIcon className='me-2 text-warning' icon={faPrint} />+ 01 234 567 89
           
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2021 Copyright:
      <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        MediaPlayer.com
      </a>
    </div>
  </MDBFooter>
  )
}

export default Footer

