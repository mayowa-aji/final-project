import React from 'react';
import '../styles/about.css'
import { Container, Col, Row } from 'react-bootstrap';


const About = () => {
  return (
    <>
    <div className='about-padding'>
       <h4 style={{paddingTop:'2.5rem', paddingBottom:'1rem'}}>THE FLO+THEO STORYs</h4>
       <p>
       FLO+THEO founded in Queens, NY formulates 100% vegan skin care products, utilizing only the freshest ingredients suitable even for the most delicate skin.  The conception of FLO+THEO grew out a real need, that of the founders to find suitable products for their sensitive skin.  Through years of research, learning and experimentation, they were able to create nutritious and beneficial formulations. The creation of FLO+THEO brings together the founders love for creativity, innovation and healthy skin care.
       </p>
       <p>
       The brand is a collaboration between two sisters, Mayowa and Ebony. Born in Nigeria and raised in England and Ireland, the two sisters now call New York home. FLO+THEO is named after two great heroes in their lives, the FLO stands for Florence, their mother's name whilst the THEO is in honor and memory of their Uncle.
       </p>

       <h4 style={{paddingTop:'2.5rem', paddingBottom:'1rem'}}>
      MEET THE TEAM
      </h4>
      <Container fluid>
          <Row className="flex-column flex-md-row">
            <Col md={6}>
              <img src="https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1382304521524-Y1DV211KQ48RJT0GKM2G/mayasoap-blurred.jpg?format=2500w" alt="Mayowa " />
              <p style={{paddingTop:'1rem'}}>MAYOWA, CO-FOUNDER</p>
            </Col>
            <Col md={6} style={{ display: 'flex', alignItems: 'center' }}>
              <p className='left-paragraph-padding'>Truly believing that less can be more, Mayowa co-founded FLO+THEO in order to create simple yet effective products. With a background in Software Engineering and E-commerce, she is often tinkering away on the FLO+THEO website and handling the more technical aspects of the business. On her days off, she can be found wandering around the city in search of vintage pieces of furniture, new vegan restaurants or taking a fitness class.</p>
            </Col>
          </Row>
        </Container>

        <Container fluid style={{paddingTop:'6rem'}}>
          <Row className="flex-column flex-row-reverse">
          <Col md={6}>
              <img src="https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1382304383647-BE81QIFEZC8MUNNFXW8B/Ademipo.jpg?format=2500w" alt="Ebony " />
              <p style={{paddingTop:'1rem'}}>Ebony, CO-FOUNDER</p>
          </Col>
          <Col md={6} style={{ display: 'flex', alignItems: 'center' }}>
              <p className='right-paragraph-padding'>Inspired and passionate about all things beauty, co-founder Ebony left a career in law, in order to follow her dreams, of starting FLO+THEO. Now, instead of finding her in a courtroom, you can now find her and her sister, around markets in NYC, introducing vegan, artisanal skin care products to savvy New Yorkers. Ebony enjoys entrepreneurship (thinks being a co-founder of FLO+THEO is awesome), photography and looking for delicious and strange things to eat in NYC.</p>
            </Col>
          </Row>
        </Container>
    </div>

    </>
  );
}

export default About;

