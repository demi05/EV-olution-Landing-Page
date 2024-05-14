import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-div">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Your Email Adress</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="phone-num">Phone Number</label>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <label htmlFor="contact">What would you like to say?</label>
        <textarea
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        ></textarea>
        <button>Submit</button>
      </form>

      <div className="social-icons">
        <Link to={"./"}>
          <FontAwesomeIcon icon={faFacebookF} className="icon" />
        </Link>
        <Link to={"./"}>
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </Link>
        <Link to={"./"}>
          <FontAwesomeIcon icon={faTwitter} className="icon" />
        </Link>
        <Link to={"./"}>
          <FontAwesomeIcon icon={faTelegram} className="icon" />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
