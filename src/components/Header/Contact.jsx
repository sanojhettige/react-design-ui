import React from "react";

import { ContactContainer } from "./styles";

const Contact = (props) => {
  return (
    <ContactContainer>
      <div className="section-information">
        <span className="title-main">¿Necesita ayuda con tu aplicación?</span>
        <br />
        <span className="title-contact">(55) 3600 5126 | (55)4614 3060</span>
      </div>
      <div className="section-icon">
        <i className="icon-headset_mic" />
      </div>
    </ContactContainer>
  );
};

export default Contact;
