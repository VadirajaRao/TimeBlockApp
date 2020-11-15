import React from "react"
import { Link } from "gatsby"

// import TimerInput from "../components/timer-input"

export default function GetStarted() {
    return (
        <div>
            <h1>TimeBlockApp</h1>

            <Link to="/">Main</Link>
            <Link to="/get-started/">Begin</Link>
        </div>
    )
}
