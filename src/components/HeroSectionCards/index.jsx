const HeroSectionCards = ({ card }) => {
  console.log(card);
  return (
    <>
      <div className="hero-sec-card border ">
        <img src={card.image} alt="shoes" className=" p-2 w-100 " />
        <div className="card-text p-2">
          <img src={card.icon} alt="cardicon" className="p-2" />
          <span>{card.title}</span>
          <p className="ps-2">{card.id}</p>
          <div className="card-price-sec d-flex justify-content-between align-items-center border p-2 ">
            <div className="price d-flex flex-column">
              <span className="hero-sec-card-price-title">Price</span>
              <span className="hero-sec-card-price">{card.price}</span>
            </div>
            <div className="bid d-flex flex-column">
              <span className="hero-sec-card-bid-price-title">Highest bid</span>
              <span className="hero-sec-card-bid-price">{card.highestbidprice}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSectionCards;
