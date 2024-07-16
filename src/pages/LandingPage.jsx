import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../App.css'
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    <>
      <Row className='w-100 mt-5 d-flex justify-content-center align-items-center ms-1'>
        <Col md={1}></Col>
        <Col md={5} className='p-3'>
          <h5>WELCOME TO <span className='text-warning'>MEDIA PLAYER</span></h5>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nisi neque sequi dolore iusto accusamus consectetur 
            soluta accusantium modi fugiat! Omnis laudantium quo consectetur accusantium. Accusantium illum nobis vero voluptates! Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Quisquam eligendi assumenda incidunt voluptatum natus, nihil delectus
            inventore dolore similique cumque omnis rem nobis exercitationem. Tenetur ullam dolor sit inventore quasi!</p>
          <Link to={'/home'}><button className='btn btn-warning shadow rounded mt-5'>GET STARTED</button></Link>
        </Col>
        <Col md={1}></Col>
        <Col md={5} className='d-flex justify-content-center align-items-center'>
          <img src="https://static.wixstatic.com/media/a27d24_a5f805e1a205492c896aa5b7c0fefc9f~mv2.gif" alt="No Image" className='w-75'/>
        </Col>
      </Row>
      <h3 className='text-center'>Features</h3>
      <Row className='mt-5 align-items-center justify-content-center text-center p-3'>
        <Col md={1}></Col>
        <Col md={3}>
          <Card className='align-items-center justify-content-center feature-card shadow rounded p-3 mt-3'>
            <Card.Img variant="top" src="https://cdn.dribbble.com/users/516449/screenshots/2388265/giphy.gif" className='card-img'/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className='align-items-center justify-content-center feature-card shadow rounded p-3 mt-3'>
            <Card.Img variant="top" src="https://cdn.dribbble.com/users/34556/screenshots/1680799/play.gif" className='card-img'/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className='align-items-center justify-content-center feature-card shadow rounded p-3 mt-3'>
            <Card.Img variant="top" src="https://cdn.dribbble.com/users/1473736/screenshots/4106177/logo-animated.gif" className='card-img'/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title> 
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={1}></Col>
      </Row>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 border border-secondary rounded my-5 p-3 border-2">
               <div className="row">
                <div className="col-md-6">
                  <h2 className='text-warning '>Simple Fast And Powerful</h2>
                  <p className='mt-5'><span className='fs-5'>PLAY EVERYTHING :</span>   is a creative exploration into the philosophy and practice of play in human life.
                     The work delves into the idea that play is not just an activity but a vital component of human existence that spans across all ages</p>
                     <p className='mt-5'><span className='fs-5'>PLAY EVERYTHING :</span>   is a creative exploration into the philosophy and practice of play in human life.
                     The work delves into the idea that play is not just an activity but a vital component of human existence that spans across all ages</p>
                     <p className='mt-5'><span className='fs-5'>PLAY EVERYTHING :</span>   is a creative exploration into the philosophy and practice of play in human life.
                     The work delves into the idea that play is not just an activity but a vital component of human existence that spans across all ages</p>
                </div>
                <div className="col-md-6">
                <iframe width="100%" height="440" src="https://www.youtube.com/embed/B9synWjqBn8" title="Travis Scott - FE!N ft. Playboi Carti"
                 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
               </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  )
}

export default LandingPage;
