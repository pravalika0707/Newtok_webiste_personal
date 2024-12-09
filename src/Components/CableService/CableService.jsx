import React from "react";
import "./CableService.css";
import { Link } from "react-router-dom";
import meg from "../../assets/meg.jpg";
import news from "../../assets/news.jpg";
import StarSports_Logo from "../../assets/StarSports_Logo-Tagline.jpg";
import aradhana from "../../assets/aradhana.png";
import ETV from "../../assets/916e9e53de25391f9f457c70f5fc7202.png";
import sports from "../../assets/sportsssssss.jpg";
const CableService = () => {
  return (
    <div
      class="container"
      style={{
        backgroundImage: `url(${sports})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Scales proportionally to cover the entire area
        backgroundPosition: "center", // Ensures it stays centered
      }}
    >
      <div class="service-details">
        <div class="dumm1">
          <h1>కేబుల్ టీవీ సేవలు</h1>
          <p>
            మీ కుటుంబం కోసం ఉత్తమ టీవీ ప్యాకేజీలు. మా కేబుల్ టీవీ సేవలు విభిన్న
            ఛానల్స్, సినిమాలు, సీరియల్స్, వార్తలు, క్రీడలు, మరియు మరిన్ని
            అందిస్తాయి.
          </p>
        </div>

        <div class="sra">
          <img src={meg} alt="Telugu Channels" class="res" />
          <img src={news} alt="News Channels" class="res" />
          <img src={StarSports_Logo} alt="Star Sports" class="res" />
          <img src={ETV} alt="ETV" />
          <img src={aradhana} alt="aradhana Channels" />
        </div>

        <div class="package-cards">
          <div class="package-card1">
            <h4 style={{ textDecoration: "underline" }}>ప్రాథమిక ప్యాకేజీ</h4>
            <p>
              <span style={{ color: "black", lineHeight: "1.5" }}>
                ప్రారంభ ధర - ₹270/నెల
              </span>
            </p>
            <p>అన్ని తెలుగు ఛానల్స్.</p>
          </div>
          <div class="package-card">
            <h4 style={{ textDecoration: "underline" }}>
              కొత్త కనెక్షన్ ప్రత్యేక ఆఫర్
            </h4>
            <p>
              కొత్త కనెక్షన్ ప్రత్యేక ఆఫర్:
              <br />
              👉 టీవీ ఛానల్స్
              <br />
              👉 HD బాక్స్
              <br />
              👉 6 నెలల కాలపరిమితి
              <br />
              <span style={{ color: "black", lineHeight: "1.5" }}>
                {" "}
                ధర: ₹2000 మాత్రమే!
              </span>
              <br />
            </p>
            <p>అత్యుత్తమ HD ఛానల్స్, సినిమా ఛానల్స్ మరియు మరిన్ని!!</p>
          </div>
        </div>
      </div>
      <div class="nav-buttons">
        <button><Link to="/firstpage">Previous</Link></button>
        <button><Link to="/internet">Next</Link></button>
      </div>
    </div>
  );
};

export default CableService;
