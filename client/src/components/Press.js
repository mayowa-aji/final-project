import React from "react";
import Gallery from "./Gallery";

const Press = () => {
  const images = [
    { url: "https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1515166526264-ZEUG8BYDINE6EWYLEEJ2/teenvogue.jpg?format=2500w", link: "https://example.com/image1" },
    { url: "https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1515166449995-X9FZRC12QPHT4UHTTNJW/buzzfeed.jpg?format=1500", link: "https://example.com/image2" },
    { url: "https://cdn2.bustle.com/2023/zoe/logo-98080d9bbb.svg", link: "https://example.com/image3" },
    { url: "https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1515167297442-JQ7OL46Q4VQ3882SRFTY/bustle.jpg?format=1500w" , link: "https://example.com/image3" },
    { url: "https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1426094920515-EOJIW322QVRWO536S4MY/image-asset.png?format=750w" , link: "https://example.com/image3" },
    { url: "https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1515167712901-IFZC84DOYNZV5LUWLUPB/mailchimp.jpg?format=2500w" , link: "https://example.com/image3" },
    { url: "https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1411095438861-EBQTLZ3LHD70RIPE00KR/Glamour_Logo_XL.png?format=750w" , link: "https://example.com/image3" },
    { url: "https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1411095494513-C9480QLZI3S45GOM14PE/logo-well-good.png?format=1000w" , link: "https://example.com/image3" },
    { url: "https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1411095633991-JBVN12MF6RBN96C62VPV/baublebar.jpg?format=750w" , link: "https://example.com/image3" },
  ];


  return (
    <>
     <div style ={{paddingLeft:'3rem', paddingRight:'3rem', paddingBottom:'3rem'}}>
    <h3 style ={{paddingTop:'2rem'}}>As seen on ...</h3>
    <div className="gallery" >
    {images.map((image, index) => (
      <div className="gallery-item" key={index}>
        <a href={image.link} target="_blank" rel="noopener noreferrer">
          <img src={image.url} alt={`Image ${index}`} />
        </a>
      </div>
    ))}
  </div>
  </div>
  </>
  );
};

export default Press;


