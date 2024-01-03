import React from "react";

const Impressum = () => {
  return (
    <div className="impressum-container">
      <div>
        <h1>Willkommen auf der Impressum-Seite</h1>
      </div>

      <textarea
        value="Dies ist ein Studierenden-Projekt im Rahmen des Moduls 'Wirtschaftsinformatik-Projekt' des Studiengangs B.Sc. Wirtschaftsinformatik an der BHT Berlin"
        rows={4}
        cols={50}
        readOnly
      />
      <div>
        <h3>Anschrift der Hochschule:</h3>
      </div>
      <address className="address-container">
        Luxemburger Straße 10<br />
        13353 Berlin<br />
        <p>
          Telefon:{" "}
          <a href="tel:03045040" style={{ textDecoration: "underline" }}>
            030 4504-0
          </a>
          <br />
          E-Mail:{" "}
          <a href="mailto:webteam@bht-berlin.de">webteam@bht-berlin.de</a>
        </p>
        <p>
        Besuchen Sie auch die{" "}
        <a href="https://www.bht-berlin.de/" target="_blank" rel="noopener noreferrer">
          Homepage der BHT
        </a>
        .
      </p>
      </address>

      <address className="address-container">
        <div>
          <h3>Die Teammitglieder:</h3>
        </div>
        <br />
        André Schlichting<br />
        E-Mail:{" "}
        <a href="mailto:s69575@bht-berlin.de">s69575@bht-berlin.de</a>
        <br />
        Daniel Kunst<br />
        E-Mail:{" "}
        <a href="mailto:s81797@bht-berlin.de">s81797@bht-berlin.de</a>
        <br />
        Christoph Rudolph<br />
        E-Mail:{" "}
        <a href="mailto:s82089@bht-berlin.de">s82089@bht-berlin.de</a>
        <br />
        Theo Prill<br />
        E-Mail:{" "}
        <a href="mailto:s82168@bht-berlin.de">s82168@bht-berlin.de</a>
        <br />
        Jan Gruner<br />
        E-Mail:{" "}
        <a href="mailto:s81694@bht-berlin.de">s81694@bht-berlin.de</a>
        <br />
        Saskia-Maria Mellies<br />
        E-Mail:{" "}
        <a href="mailto:s54177@bht-berlin.de">s54177@bht-berlin.de</a>
        <br />
      </address>

    
    </div>
  );
};

export default Impressum;
