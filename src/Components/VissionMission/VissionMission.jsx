import React from "react";
import "./VissionMission.css";
import { Link } from "react-router-dom";
const VissionMission = () => {
  return (
    <div class="about-section">
      <h2>మా ప్రస్థానం</h2>

      <p>
        మా కేబుల్ మరియు ఇంటర్నెట్ సేవల సంస్థ మీ ఇంటి అవసరాలను తీర్చడానికి
        ప్రారంభించబడింది. <br />
        మా లక్ష్యం ప్రతి ఇంటికి వేగవంతమైన మరియు నమ్మకమైన సేవలు అందించడం. <br />
        ప్రథమస్థాయిలో కేబుల్ టీవీ సేవలతో ప్రారంభమైన మా ప్రయాణం ఇప్పుడు
        అత్యాధునిక ఇంటర్నెట్ సేవలకు విస్తరించింది.
      </p>

      <div class="vision-mission">
        <div>
          <h3>మా విజన్</h3>
          <p>
            ప్రతి కుటుంబానికి అత్యుత్తమ డిజిటల్ సేవలను అందించి, వారి జీవన
            ప్రమాణాలను మెరుగుపరచడం.
          </p>
        </div>
        <div>
          <h3>మా మిషన్</h3>
          <p>
            సాంకేతికతలో అత్యుత్తమ సేవలతో వినియోగదారులకు సులభతరం మరియు వేగవంతమైన
            డిజిటల్ అనుభవం అందించడం.
          </p>
        </div>
      </div>
      <div class="nav-buttons">
        <Link to="/">Previous</Link>
        <Link to="/firstpage">Next</Link>
      </div>
    </div>
  );
};

export default VissionMission;
