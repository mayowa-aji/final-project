  import React from 'react';
  import { Container, Row, Col } from 'react-bootstrap';
  import '../styles/ingredients.css';

  const ingredientsData = [
    {
      name: 'ALOE VERA',
      description:
        'Aloe Vera often described as a wonder-plant, produces a clear gel that has antibacterial properties.The gel also has the ability to naturally soothe, rejuvenate and heal irritated and problematic skin.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1096110780870574180/Ebz_aloe_vera_water_color_style_white_background_02014ab7-4892-405e-8f3b-9cf0e0a68e12.png'
    },
    {
      name: 'CANDELILLA WAX',
      description:
        'Candelilla wax is a natural wax derived from a candelilla plant, which grows  in Mexico, in the North Central Plains and the Chihuahuan Desert. It is a hard wax and acts as a great vegan alternative to beeswax.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1096100487369076776/Ebz_pretty_CANDELILLA_plant_vector_image_72e4db9a-da34-4feb-99dd-ff641b005f17.png'
    },
    {
      name: 'COCOA BUTTER',
      description:
        'Cocoa butter has been used to achieve soft and supple skin for centuries. This ultimate moisturizer is mineral rich and filled with natural antioxidants and vitamins, promoting skin elasticity and locking in moisture.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1096113980067557466/Ebz_palm_oil_water_color_style_white_7bbb98f4-5686-4ef8-a5ce-c4e931ee552d.png'
    },
    {
      name: 'COCONUT OIL',
      description:
        'Coconut oil is filled with antioxidants, Vitamins A, C and E, which all work together to heal and repair damaged skin. Coconut oil is readily absorbed by the skin and has remarkable deep moisturizing and hydrating properties.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1096103670342500415/Ebz_a_coconut_water_color_style_white_background_2a907a46-9fb1-40cd-9c9c-42d503d5d5f3.png'
    },
    {
      name: 'ESSENTIAL OILS',
      description:
        'Essential oils are natural compounds that can be found in the flowers, bark, stems, roots and fruits of plants. Essentials oils  are renowned for both their aromatic and therapeutic properties.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1096112337972367360/Ebz_oil_in_a_dropper_oil_water_color_style_white_background_cc5ac36b-935c-4db6-951c-689d7fb8fe42.png'
    },
    {
      name: 'GRAPESEED OIL',
      description:
        'Grapeseed oil is a nutrient-rich oil extracted from the seeds of grapes. It is rich in antioxidants, contains numerous essential fatty acids, providing nourishment and moisture to the skin . It is light and absorbs well into the skin.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1096119445954498811/Ebz_purple_grapes_and_a_bottle_of_oil_water_color_style_white_b_315f5e77-5931-498f-b4db-aebf12281b0b.png'
    },
    {
      name: 'LAVENDER',
      description:
        'The use of Lavender in skin care formulations can be traced back thousands of years. This aromatic shrub has both antiseptic and anti-fungal abilities.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1096104035112730776/Ebz_lavender_flower_water_color_style_white_background_de945be2-526e-4a3c-8c99-fde9addf8259.png'
    },
    {
      name: 'GRAPESEED OIL',
      description:
        'Grapeseed oil is a nutrient-rich oil extracted from the seeds of grapes. It is rich in antioxidants, contains numerous essential fatty acids, providing nourishment and moisture to the skin . It is light and absorbs well into the skin.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1096117895953645598/Ebz_sugar_cane_water_color_style_pure_white_background_922bc559-8805-4b85-ae1e-e0aef2045d74.png'
    },
    {
      name: 'GRAPESEED OIL',
      description:
        'Grapeseed oil is a nutrient-rich oil extracted from the seeds of grapes. It is rich in antioxidants, contains numerous essential fatty acids, providing nourishment and moisture to the skin . It is light and absorbs well into the skin.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1096106941308219563/Ebz_Kaolin_clay_water_color_style_white_background_163cf585-265f-491b-aa5a-208dc75c2deb.png'
    },
    {
      name: 'GRAPESEED OIL',
      description:
        'Grapeseed oil is a nutrient-rich oil extracted from the seeds of grapes. It is rich in antioxidants, contains numerous essential fatty acids, providing nourishment and moisture to the skin . It is light and absorbs well into the skin.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1096104342811058276/Ebz_a_jar_of_oil_water_color_style_white_background_f3467c34-873c-41e1-b87f-33459155a27b.png'
    },
    {
      name: 'GRAPESEED OIL',
      description:
        'Grapeseed oil is a nutrient-rich oil extracted from the seeds of grapes. It is rich in antioxidants, contains numerous essential fatty acids, providing nourishment and moisture to the skin . It is light and absorbs well into the skin.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1096124425134407751/Ebz_raw_shea_butter_water_color_style_pure_white_background_col_1e3d20bf-0c62-4f92-9eda-5c9ecd6c07d3.png'
    },
    {
      name: 'GRAPESEED OIL',
      description:
        'Grapeseed oil is a nutrient-rich oil extracted from the seeds of grapes. It is rich in antioxidants, contains numerous essential fatty acids, providing nourishment and moisture to the skin . It is light and absorbs well into the skin.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1096120917203091506/Ebz_ROSEHIP_POWDER_watercolor_style_pure_white_background_color_24e9b4d0-e60e-44b1-a7bb-b7ae267538fa.png'
    },
    {
      name: 'GRAPESEED OIL',
      description:
        'Grapeseed oil is a nutrient-rich oil extracted from the seeds of grapes. It is rich in antioxidants, contains numerous essential fatty acids, providing nourishment and moisture to the skin . It is light and absorbs well into the skin.',
      image:
        'https://cdn.discordapp.com/attachments/1075132232739594323/1096126603920154652/Ebz_almond_oil_water_color_style_pure_white_background_color_11a7f623-b4ca-4a55-91a6-38ae1d3c950f.png'
    },
  ];



const Ingredients = () => {
  return (
    <>
      <div className='ingredient-padding'>
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


