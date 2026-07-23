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
          sales representatives and learn how Prodigy can streamline your agency&apos;s
          operations from dispatch to billing.
        </p>
        <div
          className="meetings-iframe-container"
          data-src="https://go.prodigyems.com/meetings/jamescal/demo-on-site?embed=true"
        />
      </div>

</div>
  );
}
