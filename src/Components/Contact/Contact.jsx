import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import ContactImage from "../../assets/wallpapperlast.jpg";
const Contact = () => {
  return (
    <div
      class="contact"
      style={{
        backgroundImage: `url(${ContactImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Scales proportionally to cover the entire area
        backgroundPosition: "center", // Ensures it stays centered
      }}
    >
      <div class="mon1">
        <h1>MALLEBOINA VEERABABU</h1>

        <img
          src="https://res.cloudinary.com/dt4ulvwn0/image/upload/v1733376249/WhatsApp_Image_2024-12-05_at_10.26.38_AM-fotor-2024120510520_hj1nln.png"
          class="daddy"
          alt="ProfileImage"
        />
        <div>
          <address>
            <h4>
              Phone number: <a href="tel:+919948157457">9948157457</a>
              <br />
              Email Address:{" "}
              <a href="mailto:mallaboinaveerababu19@gmail.com">
                mallaboinaveerababu19@gmail.com
              </a>
              <br />
              House number: 3-70
              <br />
              BHAIRUVUNIPALLY
              <br />
              NELKONDAPALLY(M)
              <br />
              KHAMMAM(D)
              <br />
              Pin Code: 507160
              <br />
              Location:{" "}
              <a
                href="https://www.google.com/maps/place/Thrivallika+sai+cable/@17.065519,80.0662592,17z/data=!3m1!4b1!4m6!3m5!1s0x3a34ff3587891e91:0xd38a18b8b352126c!8m2!3d17.065519!4d80.0688341!16s%2Fg%2F11kk032w44?entry=ttu&g_ep=EgoyMDI0MTIwMi4wIKXMDSoASAFQAw%3D%3D"
                class="daddy"
              >
                Click Here
              </a>
            </h4>
          </address>
        </div>
        <div class="nav-buttons">
          <Link to="/internet">Previous</Link>
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
