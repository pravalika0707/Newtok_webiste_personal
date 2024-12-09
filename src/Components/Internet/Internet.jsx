import React from "react";
import { Link } from "react-router-dom";
import "./Internet.css";
import pngtree from "../../assets/pngtree-abstract-3d-world-network-a-rendering-of-global-internet-and-connectivity-picture-image_3682314.jpg";
const Internet = () => {
  return (
    <div
      class="internet"
      style={{
        backgroundImage: `url(${pngtree})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div class="internet-details">
        <h2
          style={{
            fontSize: "50px",
            textAlign: "center",
            color : "white",
          }}
        >
          ఇంటర్నెట్ సేవలు
        </h2>
        <p
          style={{
            fontSize: "30px",
            textAlign: "center",
            color : "white",
          }}
        >
          మీకు కావలసిన వేగం మరియు విశ్వసనీయతతో ఇంటర్నెట్ సేవలు. మా ఇంటర్నెట్
          ప్యాకేజీలు నమ్మకమైన కనెక్షన్ మరియు అత్యుత్తమ speeds అందిస్తాయి.
        </p>

        <div class="package-cards">
          <div class="package-card">
            <h4>ప్రాథమిక ప్యాకేజీ</h4>
            <p>
              <span style={{ color: "rgb(75, 210, 12)" }}>
                ప్రారంభ ధర - ₹450/నెల
              </span>
            </p>
            <p>ముందు లిమిటెడ్ డేటా, 30 Mbps వేగం.</p>
          </div>
          <div class="package-card">
            <h4>స్థాయి ప్యాకేజీ</h4>
            <p>
              <span style={{ color: "rgb(75, 210, 12)" }}>
                ప్రారంభ ధర - ₹600/నెల
              </span>
            </p>
            <p>ఫాస్ట్ 50 Mbps కనెక్షన్ మరియు అవాంతరము.</p>
          </div>
          <div class="package-card">
            <h4>మరిన్ని ప్యాకేజీలు</h4>
            <p>
              50 Mbps పైగా కనెక్షన్ ధర మీ అవసరాలకు మరియు ఎంపిక చేసిన వేగం
              ఆధారంగా మారవచ్చు.
            </p>
            <p>
              <span style={{ color: "rgb(75, 210, 12)" }}>
                మీకు కావలసిన కనెక్షన్ వేగాన్ని ఎంచుకుని, ప్రత్యేక ధరలతో
                అత్యుత్తమ సేవలు పొందండి!
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="nav-buttons">
        <Link to="/cabelservices">Previous</Link>
        <Link to="/contact">Next</Link>
      </div>
    </div>
  );
};

export default Internet;
