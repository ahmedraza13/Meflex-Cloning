import featuredimgone from "../../Images/featuredimgone.png";
import featuredimgtwo from "../../Images/featuredimgtwo.png";
import featuredimgthree from "../../Images/featuredimgthree.png";
import featuredimgfour from "../../Images/featuredimgfour.png";
import featuredimgfive from "../../Images/featuredimgfive.png";
import featuredimgsix from "../../Images/featuredimgsix.png";
import featuredimgseven from "../../Images/featuredimgseven.png";

const FeaturedSection = () => {
  return (
    <div className="featured-section container-xxl ">
      <h1>Featured On</h1>
      <div className="featured-section-images">
        <img src={featuredimgone} alt="featured image" />
        <img src={featuredimgtwo} alt="featured image" />
        <img src={featuredimgthree} alt="featured image" />
        <img src={featuredimgfour} alt="featured image" />
        <img src={featuredimgfive} alt="featured image" />
        <img src={featuredimgsix} alt="featured image" />
        <img src={featuredimgseven} alt="featured image" />
      </div>
    </div>
  );
};

export default FeaturedSection;
