import React from "react";
import "./FirstPage.css";
import { Link } from "react-router-dom";
import Fiber from "../../assets/fider.jpg";

const FirstPage = () => {
  return (
    <div
      className="first-page"
      style={{
        backgroundImage: `url(${Fiber})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div className="content">
        <h1>ఆప్టికల్ ఫైబర్ ద్వారా టీవీ ఛానల్స్ మరియు ఇంటర్నెట్</h1>
        <p>
          కనెక్షన్‌ను అధిక వేగంతో, సురక్షితంగా, మరియు అధిక నాణ్యతతో పొందడానికి,
          మా ఆప్టికల్ ఫైబర్ సేవలను వినియోగించండి.
        </p>
      </div>

      <div className="details">
        <div className="column">
          <p>
            <span className="highlight">టీవీ ఛానల్స్:</span> టీవీ ఛానల్స్‌ని
            మీరు సిగ్నల్ అంతరాయం లేకుండా సులభంగా వీక్షించవచ్చు.
            <br /> ఎలాంటి డిస్టర్బెన్స్ లేకుండా <q>HD, 4K</q> ఛానల్స్‌ని
            అనుభవించండి.
          </p>
        </div>

        <div className="column">
          <p>
            <span className="highlight">ఇంటర్నెట్:</span> అదే ఆప్టికల్ ఫైబర్
            ద్వారా ఇంటర్నెట్ కనెక్షన్ కూడా అందించబడుతుంది.
            <br /> మీరు వేగంగా ఇంటర్నెట్ ఉపయోగించవచ్చు, ఏ సిగ్నల్ లాస్ లేకుండా.
          </p>
        </div>
      </div>

      <div className="nav-buttons">
        <Link to="/">Previous</Link>
        <Link to="/cabelservices">Next</Link>
      </div>
    </div>
  );
};

export default FirstPage;
