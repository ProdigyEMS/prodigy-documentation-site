import React, { useEffect } from "react";


export default function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.type = "text/javascript";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="salesform">

      {/* Book a Demo */}
      <div className="salesSection">
        <h2>Book a Demo</h2>
        <p>
          See Prodigy EMS in action. Schedule a personalized demo with one of our
          sales representatives and learn how Prodigy can streamline your agency's
          operations from dispatch to billing.
        </p>
        <div
          className="meetings-iframe-container"
          data-src="https://go.prodigyems.com/meetings/jamescal/demo-on-site?embed=true"
        />
      </div>

      {/* Contact Sales */}
      <div className="salesSection">
        <h2>Contact Sales</h2>
        <p>
          Have questions or want a custom quote? Fill out the form below and a
          member of our sales team will be in touch shortly. If you can include
          the number of clinicians on staff, we can prepare a tailored pricing
          estimate for your agency.
        </p>
        {/* Form will go here */}
      </div>

    </div>
  );
}
