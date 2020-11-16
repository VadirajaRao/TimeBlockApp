import React from "react"

import Navigation from "../components/navigation"
import TimerInput from "../components/timer-input"

// This function generates the page where all the application logic resides
export default function GetStarted() {
    return (
        <div>
            <Navigation></Navigation>
            <TimerInput></TimerInput>
        </div>
    )
}
