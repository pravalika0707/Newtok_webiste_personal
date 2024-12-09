import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import tvImage from '../../assets/tv.jpg';
import OIP from '../../assets/OIP.jpg';

const Home = () => {
  return (
    <div style={{ paddingBottom: "20px" }}>
      <header>
        <h1>త్రివల్లిక సాయి కేబుల్ & ఇంటర్నెట్ కనెక్షన్</h1>
        <p>మీ ఇంటికి సినిమా మహోత్సవం</p>
      </header>
      <nav className="nav-menu">
        <Link to="/vissionmission">విజన్ & మిషన్</Link>
        <Link to="/firstpage">ఆప్టికల్ ఫైబర్</Link>
        <Link to="/cabelservices">కేబుల్ సేవలు</Link>
        <Link to="/internet">ఇంటర్నెట్ సేవలు</Link>
        <Link to="/contact">మా గురించి</Link>
      </nav>
      <div className="section">
        <h2>అధిక-స్పీడ్ ఇంటర్నెట్ & కేబుల్ టీవీ సేవలు</h2>
        <p>
          మీకు కావలసిన అన్ని టీవీ ఛానల్స్
          హెచ్‌డ క్వాలిటీలో
          ప్రసారం మరియు 
          ఇంటర్నెట్ కనెక్షన్.
        </p>
      </div>
      <div className="section2">
        <h2>మన సేవలు</h2>
        <p>మీ ఇంటి కోసం అత్యుత్తమ కేబుల్ టీవీ మరియు ఇంటర్నెట్ సేవలు.</p>
      </div>
      <div className="service-cards">
        <div className="service-card">
          <img src={tvImage} alt="Cable TV" />
          <h4>కేబుల్ టీవీ</h4>
          <p>విభిన్న టీవీ ఛానల్స్, సీరియల్స్, సినిమాలు మరియు మరిన్ని!</p>
        </div>

        <div className="service-card">
          <img src={OIP} alt="Internet Service" />
          <h4>ఇంటర్నెట్ సేవలు</h4>
          <p>
            అధిక-స్పీడ్ ఇంటర్నెట్ కనెక్షన్. స్మార్ట్ బ్రౌజింగ్, HD వీడియోలు.
          </p>
        </div>
      </div>
      <div className="nav-buttons">
        <button><Link to="/vissionmission">Next</Link></button>
      </div>
    </div>
  );
};

export default Home;
