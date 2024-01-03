import React from "react";

const Impressum = () => {
  return (
    <div>
    
      <div>
        <h1>Willkommen auf der Impressum-Seite</h1>
      </div>

      <p>Dies ist ein Studierenden-Projekt im Rahmen des Moduls 'Wirtschaftsinformatik-Projekt' des Studiengangs B.Sc. Wirtschaftsinformatik an der BHT Berlin</p>
      <p>Anschrift der Hochschule:</p>
      <address className="address-container">
        [Luxemburger Straße 10, 13353 Berlin]
      </address>
      <p>Kontaktinformationen:</p>
      <address className="address-container">
        Telefon: [030 4504-0]<br />
        E-Mail: <a href="mailto:webteam@bht-berlin.de">webteam@bht-berlin.de</a>
      </address>
      <p>Redaktion</p>
      <address className="address-container">
        <p>Verantwortlich für den Inhalt:</p><br />
        <p>Die Teammitglieder:</p><br />
        André Schlichting<br />
        E-Mail: <a href="mailto:s69575@bht-berlin.de">s69575@bht-berlin.de</a><br />
        Daniel Kunst<br />
        E-Mail: <a href="mailto:s81797@bht-berlin.de">s81797@bht-berlin.de</a><br />
        Christoph Rudolph<br />
        E-Mail: <a href="mailto:s82089@bht-berlin.de">s82089@bht-berlin.de</a><br />
        Theo Prill<br />
        E-Mail: <a href="mailto:s82168@bht-berlin.de">s82168@bht-berlin.de</a><br />
        Jan Gruner<br />
        E-Mail: <a href="mailto:s81694@bht-berlin.de">s81694@bht-berlin.de</a><br />
        Saskia-Maria Mellies<br />
        E-Mail: <a href="mailto:s54177@bht-berlin.de">s54177@bht-berlin.de</a><br />
      </address>
      <p>
        Besuchen Sie auch die <a href="https://www.bht-berlin.de/" target="_blank" rel="noopener noreferrer">Homepage der Hochschule</a>.
      </p>
    </div>
  );
}

export default Impressum;