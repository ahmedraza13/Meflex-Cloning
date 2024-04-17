import rightimageone from "../../Images/sale-section-image-one.png";
import rightimagetwo from "../../Images/sale-section-image-two.png";
import rightimagethree from "../../Images/sale-section-image-three.png";
import leftimage from "../../Images/sale-section-left-image.png";

const SaleSection = () => {
  return (
    <div className="landing-page-sale-section container-xxl">
      <div className="container">
        <img
          src={rightimageone}
          alt="meflex image"
          style={{ position: "absolute", right: "5%", maxWidth: "100%" }}
          className="d-xxl-none"
        />
        <h1>
          MEFLEX
          <br />
          PUBLIC SALE OPEN
        </h1>
        <div className="d-flex justify-content-between">
          <img
            src={leftimage}
            alt="meflex logo"
            width={52}
            height={48}
            style={{ position: "relative", top: "2%", maxWidth: "100%" }}
          />
          <p>
            It will be sold on a first-come, first-served basis, and may be
            closed early if the amount of public sale is exhausted
          </p>
          <img
            src={rightimagetwo}
            alt="meflex image"
            style={{ position: "relative", bottom: "5%", maxWidth: "100%" }}
          />
        </div>
        <p id="sale-section-date">
          January 18, 2024 00:00 ~ February 29, 2024 23:59
        </p>
        <div className="sale-section-btn ">
          <button>Participate Now!</button>
          <button >
            Login <span>For Investor</span>
          </button>
          <img
            src={rightimagethree}
            alt="meflex image"
            style={{ position: "relative", bottom: "60px", left: "26%", width: "84px", height: "84px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SaleSection;
