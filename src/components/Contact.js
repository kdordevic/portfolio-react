import React from 'react';
import Form from "./Form";
// import { Trans } from "react-i18next";
import "../style/Contact.scss";
function Contact() {
    return (
      <main className="contact">
        <h1> contact</h1>
        <h2>
          <Form />
        </h2>
        <h2>
          Contact Information: Your email, phone number, and social media links.
          Example: "Email: alex.smith@example.com | Phone: (123) 456-7890 |
          LinkedIn: linkedin.com/in/alexsmith"
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 600 600"
        >
          <path
            d="M157.18565368652344,450C123.65272013346353,400.29940032958984,122.00600941975911,267.9640820821126,148.20361328125,209.2814483642578C174.40121714274088,150.59881464640299,248.20361328125,87.42515563964844,314.37127685546875,97.9041976928711C380.5389404296875,108.38323974609375,539.3712717692057,203.89222590128583,545.2095947265625,272.15570068359375C551.0479176839193,340.4191754659017,414.0718714396159,477.8443298339844,349.4012145996094,507.48504638671875C284.73055775960285,537.1257629394531,190.71858723958334,499.70059967041016,157.18565368652344,450C123.65272013346353,400.29940032958984,122.00600941975911,267.9640820821126,148.20361328125,209.2814483642578"
            fill="hsl(0, 95%, 57%)"
          ></path>
        </svg>
      </main>
    );
}

export default Contact
