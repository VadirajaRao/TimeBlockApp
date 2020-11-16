import React from "react"
import { Link } from "gatsby"

// This is a component that has links to various other pages of the application
//
// This component is used in all the pages of the application for routing
// between various pages
export default function Navigation() {
    return (
        <div>
            <h1>TimeBlockApp</h1>

            {/* Redirect to main page */}
            <Link to="/">Home</Link>

            {/* Redirect to about page */}
            <Link to="/about/">About</Link>

            {/* Redirect to begin page which has the timer logic */}
            <Link to="/get-started/">Begin</Link>
        </div>
    )
}