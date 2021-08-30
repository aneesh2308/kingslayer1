import React from 'react';
import Slider from 'react-slick';
import {Container, Row,Col} from 'react-bootstrap'
import './TestimonialSlider.css'
import Rating from 'react-rating-stars-component'
import profile from '../assets/images/thumb-3.jpg'

const TestimonialSlider = (props) => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
      
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      

      return(
          <div>
            <h3 className="mb-6 fw-700">What our users have to say</h3>
          <Slider {...settings}>
            <div>
            <Container>
                <Row>
                  <Col md={4} lg={4} sm={4}>
                    <img src={profile} style={{borderRadius : "50%"}} className="testimonial-image"/>
                  </Col>
      
                  <Col>
                  <Row className="mt-3">
                    <Col xs={8} md={8} sm={8} style={{justifyContent : "center"}}>
                      <h3 className="fw-700">Kushagra Bhagurkar</h3>
                    </Col>
                    <Col className="text-right">
                     <Rating value={5} edit={false}/>
                    </Col>
                  </Row>
                  <Row style={{justifyContent : "center"}}>

                  <p style={{paddingTop : "2%"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                  </Row>
                  </Col>
                </Row>
          </Container>
            </div>
            <div>
            <Container>
                <Row>
                  <Col md={4} lg={4} sm={4}>
                    <img src={profile} style={{borderRadius : "50%"}} className="testimonial-image"/>
                  </Col>
      
                  <Col>
                  <Row className="mt-3">
                    <Col xs={8} md={8} sm={8} style={{justifyContent : "center"}}>
                      <h3 className="fw-700">Kushagra Bhagurkar</h3>
                    </Col>
                    <Col className="text-right">
                     <Rating value={5} edit={false}/>
                    </Col>
                  </Row>
                  <Row style={{justifyContent : "center"}}>

                  <p style={{paddingTop : "2%"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                  </Row>
                  </Col>
                </Row>
          </Container>
            </div>

          </Slider>
          </div>
      )
}

export default TestimonialSlider;