import { useState } from "react";

const Card = ({ variant, src ,onClick}) => {
  const [buttonAppear, setButtonAppear] = useState<boolean>(false);

  const bigStyle = {
    width: "24.063rem",
    height: "36.405rem",
    position: "relative",
  };
  const smallStyle = {
    width: "23.929rem",
    height: "19.143rem",
    position: "relative",
  };

  const buttonStyle = {
    position: "absolute",
    right: "1rem",
    top: "1rem",
    borderRadius: "38px",
    color: "#EB5757",
    borderColor: "#EB5757",
    borderWidth: ".75px",
    background: "none",
  };

  const handleMouseEnter = () => {
    setButtonAppear(true);
  };

  const handleMouseLeave = () => {
    setButtonAppear(false);
  };
  const cardStyle = variant === "bigCard" ? bigStyle : smallStyle;

  return (
    <article
      className="card"
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {buttonAppear && <button style={buttonStyle} onClick={onClick}>delete</button>}
      <img src={src} alt="photos" />
    </article>
  );
};

export default Card;
