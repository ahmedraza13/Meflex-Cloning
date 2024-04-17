const ArtistSectionCards = ({ card }) => {
  return (
    <div className="artist-section-card border   ">
      <img src={card.image} alt="shoes" className=" p-2 w-100 " />
      <div className="d-flex justify-content-between ps-2 pe-2">
      <div className="card-text p-2">
        <img src={card.icon} alt="cardicon" className="p-2" />
        <span>{card.title}</span>
      </div>

      <button className="align-self-center m-2">{card.buttonTitle}</button>
      </div>
    </div>
  );
};

export default ArtistSectionCards;
