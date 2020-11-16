import React from "react"

import Navigation from "../components/navigation"

// Function to generate the main page. This is the starting point of the
// application.
// 
// The application can go to the "About" page and the "Begin" page from here.
// The hyperlinks for these landing pages are part of the `Navigation` component
export default function IndexPage() {
  return (
    <div>
      {/* Component containing links for other landing pages */}
      <Navigation></Navigation>
      <p>
        A way to get more things done in multiple things.
      </p>
    </div>
  )
}
