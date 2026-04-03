import React, { useEffect, useState } from "react";


export default function App() {
  const [formError, setFormError] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.onload = () => {
      try {
        if (!window.hbspt) throw new Error("hbspt not available");
        window.hbspt.forms.create({
          portalId: "4753378",
          formId: "6d3a0119-bce0-467a-aa5e-4b468432844a",
          region: "na1",
          target: "#hubspot-support-form",
        });
      } catch (_) {
        setFormError(true);
      }
    };
    script.onerror = () => setFormError(true);
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="salesform">
      <div className="formtext">
        <h2>Contact Support</h2>
        <p>
          Our support team is here to help. If you&apos;re experiencing a technical
          issue, have a question about a feature, or need guidance getting
          started, fill out the form below and we&apos;ll get back to you as quickly
          as possible.
        </p>
        <p>
          For the fastest response, please include as much detail as possible —
          such as the steps that led to the issue, any error messages you
          received, and the device or browser you&apos;re using.
        </p>
      </div>
      {formError ? (
        <p>
          The support form failed to load. Please email us directly at{" "}
          <a href="mailto:Support@prodigyems.com">Support@prodigyems.com</a>.
        </p>
      ) : (
        <div id="hubspot-support-form" />
      )}
    </div>
  );
}