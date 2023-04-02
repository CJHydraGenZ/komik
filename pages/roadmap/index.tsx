import Head from "next/head";
import React from "react";

export default function Roadmap() {
  return (
    <>
      <Head>
        <title>Roadmap</title>
        <meta name="roadmap" content="roadmap" />
        <meta
          name="google-site-verification"
          content="aX_-Lu_g7LPtYAvpUMQBSTeRhszIhVwmIojpAxsnhsI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center">
        <ul className="steps steps-vertical">
          <li className="step step-primary">
            Scraping Endpoind
          </li>
          <li className="step step-primary">
            Desain UI, Frondend, & Testing
          </li>
          <li className="step">Fixing</li>
          <li className="step">Launcing</li>
        </ul>
      </div>
    </>
  );
}
