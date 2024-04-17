import cardimageone from "../../Images/artist-card-image-one.png";
import cardimagetwo from "../../Images/artist-card-image-two.png";
import cardimagethree from "../../Images/artist-card-image-three.png";
import cardimagefour from "../../Images/artist-card-image-four.png";
import cardavatar from "../../Images/artist-card-avatar.png";

import ArtistSectionCards from "../ArtistSectionCards/index.jsx";
const ArtistSection = () => {
    const artistSectionCardContent = [
        {
          image: cardimageone,
          icon: cardavatar,
          title: "Kenter",
          buttonTitle: "30/100 Votes",
        
        },
        {
            image: cardimagetwo,
            icon: cardavatar,
            title: "Kenter",
            buttonTitle: "30/100 Votes",
        },
        {
            image: cardimagethree,
            icon: cardavatar,
            title: "Kenter",
            buttonTitle: "30/100 Votes",
        },
        {
            image: cardimagefour,
            icon: cardavatar,
            title: "Kenter",
            buttonTitle: "30/100 Votes",
        },
      ];
  return (
    <section className="landing-page-artist-section container">
      <h1>Artist</h1>

      <div className="d-flex justify-content-between">
        <p>
          Now, savor the recognition of your creativity and officially embrace
          the title of an artist
        </p>
        <button className="d-flex justify-content-center align-items-center artist-btn">
          <span >Apply for an Artist</span>
          <i className="bi bi-arrow-right text-dark fs-5 ps-2"></i>
        </button>
      </div>

      <div className="row mt-5">
        {artistSectionCardContent.map((card, index) => (
          <div key={index} className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
            <ArtistSectionCards card={card} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtistSection;
