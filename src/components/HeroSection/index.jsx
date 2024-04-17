import Cards from "../HeroSectionCards";
import roundimgone from "../../Images/hero-sec-round-img-one.png";
import roundimgtwo from "../../Images/hero-sec-round-img-two.png";
import roundimgthree from "../../Images/hero-sec-round-img-three.png";
import cardcenterimage from "../../Images/hero-sec-card-img-center.png";
import cardsicon from "../../Images/hero-sec-cards-icon.png";

const HeroSection = () => {
  const cardContent = [
    {
      image: cardcenterimage,
      icon: cardsicon,
      title: "Winter Madagascar",
      id: "Clown#7143",
      price: "0.5 ETH",
      highestbidprice: "0.5 ETH",
    },
    {
      image: cardcenterimage,
      icon: cardsicon,
      title: "Winter Madagascar",
      id: "Clown#7143",
      price: "1 ETH",
      highestbidprice: "1 ETH",
    },
    {
      image: cardcenterimage,
      icon: cardsicon,
      title: "Winter Madagascar",
      id: "Clown#7143",
      price: "0.8 ETH",
      highestbidprice: "0.8 ETH",
    },
  ];

  return (
    <div className="hero-section container">
      <div className="row">
        <div className="col-12 ">
          <h1 id="hero-sec-title"> MEFLEX, AI Fashion <br />Contest Platform</h1>
          <p id="hero-sec-para">Design, create, store, and trade unique NFTs easily!</p>
         <div className="hero-sec-rounded-image d-flex justify-content-center">
            <img src={roundimgone} alt="roundimgone" />
            <img src={roundimgtwo} alt="roundimgtwo" />
            <img src={roundimgthree} alt="roundimgthree" />
            <span>+50K</span>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        {cardContent.map((card, index) => (
          <div key={index} className={`col-4 p-0 ${index === 0 ? 'left-card' : ''}  ${index === 1 ? 'center-card' : ''} ${index === 2 ? 'right-card' : ''}`}>
            <Cards card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
