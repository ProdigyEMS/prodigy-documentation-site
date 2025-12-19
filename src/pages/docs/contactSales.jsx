import React from 'react'
import HubspotForm from 'react-hubspot-form'
import Link from 'next/link'

export default function App() {
  return (
    <div className="salesform">
      <div className="formtext">
        <p>
          Our sales team is always happy to answer any questions you might have.
          If you provide us with the total number of clinicians you have on
          staff, we can supply you with a quote to get us started. Looking to a
          demo? Use this calendar link to{' '}
          <Link href="https://meetings.hubspot.com/ryan1574">
            schedule your demo
          </Link>{' '}
          today.
        </p>
      </div>
      <HubspotForm
        portalId={process.env.NEXT_PUBLIC_PORTALID}
        formId={process.env.NEXT_PUBLIC_FORMID}
        onSubmit={() => console.log('Submit!')}
        onReady={(form) => console.log('Form ready!')}
        loading={<div></div>}
      />
    </div>
  )
}
