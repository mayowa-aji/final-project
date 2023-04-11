  import React from 'react';
  import { Container, Row, Col } from 'react-bootstrap';
  import '../styles/ingredients.css';

  const ingredientsData = [
    {
      name: 'ALOE VERA',
      description:
        'Aloe Vera often described as a wonder-plant, produces a clear gel that has antibacterial properties.The gel also has the ability to naturally soothe, rejuvenate and heal irritated and problematic skin.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1095157586812223619/Ebz_a_line_outline_of_the_aloe_vera_plant_a50cc963-a390-459c-b451-fba9a33a3363.png'
    },
    {
      name: 'CANDELILLA WAX',
      description:
        'Candelilla wax is a natural wax derived from a candelilla plant, which grows  in Mexico, in the North Central Plains and the Chihuahuan Desert. It is a hard wax and acts as a great vegan alternative to beeswax.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1095157586812223619/Ebz_a_line_outline_of_the_aloe_vera_plant_a50cc963-a390-459c-b451-fba9a33a3363.png'
    },
    {
      name: 'COCOA BUTTER',
      description:
        'Cocoa butter has been used to achieve soft and supple skin for centuries. This ultimate moisturizer is mineral rich and filled with natural antioxidants and vitamins, promoting skin elasticity and locking in moisture.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1095175971021263018/Ebz_line_drawing_of_COCOA_BUTTER_with_color_f035186c-2ba6-41e0-956f-8706009065a8.png'
    },
    {
      name: 'COCONUT OIL',
      description:
        'Coconut oil is filled with antioxidants, Vitamins A, C and E, which all work together to heal and repair damaged skin. Coconut oil is readily absorbed by the skin and has remarkable deep moisturizing and hydrating properties.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1095176796296728666/Ebz_line_drawing_with_color_of_coconut_e0b3b5c4-e1e8-4da3-8e27-eebeaa523959.png'
    },
    {
      name: 'ESSENTIAL OILS',
      description:
        'Essential oils are natural compounds that can be found in the flowers, bark, stems, roots and fruits of plants. Essentials oils  are renowned for both their aromatic and therapeutic properties.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1095178483057041438/Ebz_line_drawing_of_essential_oil_3cb81ff2-6dc3-446a-9545-7a91e87a2ca2.png'
    },
    {
      name: 'GRAPESEED OIL',
      description:
        'Grapeseed oil is a nutrient-rich oil extracted from the seeds of grapes. It is rich in antioxidants, contains numerous essential fatty acids, providing nourishment and moisture to the skin . It is light and absorbs well into the skin.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1095157586812223619/Ebz_a_line_outline_of_the_aloe_vera_plant_a50cc963-a390-459c-b451-fba9a33a3363.png'
    },
    {
      name: 'LAVENDER',
      description:
        'The use of Lavender in skin care formulations can be traced back thousands of years. This aromatic shrub has both antiseptic and anti-fungal abilities.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1095174317215592599/Ebz_line_drawing_of_lavender_with_color_1dc7fa62-5ae7-4fd3-a64d-3227569b0b9c.png'
    },
    {
      name: 'GRAPESEED OIL',
      description:
        'Grapeseed oil is a nutrient-rich oil extracted from the seeds of grapes. It is rich in antioxidants, contains numerous essential fatty acids, providing nourishment and moisture to the skin . It is light and absorbs well into the skin.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1095157586812223619/Ebz_a_line_outline_of_the_aloe_vera_plant_a50cc963-a390-459c-b451-fba9a33a3363.png'
    },
    {
      name: 'GRAPESEED OIL',
      description:
        'Grapeseed oil is a nutrient-rich oil extracted from the seeds of grapes. It is rich in antioxidants, contains numerous essential fatty acids, providing nourishment and moisture to the skin . It is light and absorbs well into the skin.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1095157586812223619/Ebz_a_line_outline_of_the_aloe_vera_plant_a50cc963-a390-459c-b451-fba9a33a3363.png'
    },
    {
      name: 'GRAPESEED OIL',
      description:
        'Grapeseed oil is a nutrient-rich oil extracted from the seeds of grapes. It is rich in antioxidants, contains numerous essential fatty acids, providing nourishment and moisture to the skin . It is light and absorbs well into the skin.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1095157586812223619/Ebz_a_line_outline_of_the_aloe_vera_plant_a50cc963-a390-459c-b451-fba9a33a3363.png'
    },
    {
      name: 'GRAPESEED OIL',
      description:
        'Grapeseed oil is a nutrient-rich oil extracted from the seeds of grapes. It is rich in antioxidants, contains numerous essential fatty acids, providing nourishment and moisture to the skin . It is light and absorbs well into the skin.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1095157586812223619/Ebz_a_line_outline_of_the_aloe_vera_plant_a50cc963-a390-459c-b451-fba9a33a3363.png'
    },
    {
      name: 'GRAPESEED OIL',
      description:
        'Grapeseed oil is a nutrient-rich oil extracted from the seeds of grapes. It is rich in antioxidants, contains numerous essential fatty acids, providing nourishment and moisture to the skin . It is light and absorbs well into the skin.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1095157586812223619/Ebz_a_line_outline_of_the_aloe_vera_plant_a50cc963-a390-459c-b451-fba9a33a3363.png'
    },
    {
      name: 'GRAPESEED OIL',
      description:
        'Grapeseed oil is a nutrient-rich oil extracted from the seeds of grapes. It is rich in antioxidants, contains numerous essential fatty acids, providing nourishment and moisture to the skin . It is light and absorbs well into the skin.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1095157586812223619/Ebz_a_line_outline_of_the_aloe_vera_plant_a50cc963-a390-459c-b451-fba9a33a3363.png'
    },
  ];



const Ingredients = () => {
  return (
    <>
      <div className='container-padding'>
        <Container fluid>
          {ingredientsData.map((ingredient, index) => (
            <Row key={index} style={{ paddingTop: '2rem' }}>
              <Col md={3}>
                <img
                  className='ingredient-images'
                  src={ingredient.image}
                  alt={ingredient.name}
                />
              </Col>
              <Col md={9} className='d-flex align-items-center'>
                <p>{ingredient.description}</p>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    </>
  );
};

export default Ingredients;


