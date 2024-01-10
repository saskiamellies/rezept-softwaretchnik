import React from "react";

const Impressum = () => {
  return (
    <div className="impressum-container">
      <div>
        <h1>Imprint</h1>
      </div>

      <textarea
      className="textarea-no-border"
        value="This is a student project as part of the 'Business Informatics Project' module of the B.Sc. degree program. Business informatics at BHT Berlin."
        rows={4}
        cols={50}
        readOnly
      />
      <div>
        <h3>Address of the university:</h3>
      </div>
      <address className="address-container">
        Luxemburger Straße 10<br />
        13353 Berlin<br />
        <p>
          Phone:{" "}
          <a href="tel:03045040" style={{ textDecoration: "underline" }}>
            030 4504-0
          </a>
          <br />
          Mail:{" "}
          <a href="mailto:webteam@bht-berlin.de">webteam@bht-berlin.de</a>
        </p>
        <p>
        Also visit {" "}
        <a href="https://www.bht-berlin.de/" target="_blank" rel="noopener noreferrer">
          Homepage of BHT
        </a>
        .
      </p>
      </address>

      <address className="address-container">
        <div>
          <h3>Team members:</h3>
        </div>
        <br />
        André Schlichting<br />
        Mail:{" "}
        <a href="mailto:s69575@bht-berlin.de">s69575@bht-berlin.de</a>
        <br />
        Daniel Kunst<br />
        Mail:{" "}
        <a href="mailto:s81797@bht-berlin.de">s81797@bht-berlin.de</a>
        <br />
        Christoph Rudolph<br />
        Mail:{" "}
        <a href="mailto:s82089@bht-berlin.de">s82089@bht-berlin.de</a>
        <br />
        Theo Prill<br />
        Mail:{" "}
        <a href="mailto:s82168@bht-berlin.de">s82168@bht-berlin.de</a>
        <br />
        Jan Gruner<br />
        Mail:{" "}
        <a href="mailto:s81694@bht-berlin.de">s81694@bht-berlin.de</a>
        <br />
        Saskia-Maria Mellies<br />
        Mail:{" "}
        <a href="mailto:s54177@bht-berlin.de">s54177@bht-berlin.de</a>
        <br />
      </address>

    
    </div>
  );
};

export default Impressum;
