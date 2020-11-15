import React from "react"

// This function is a component which is used to take the time input for a block
export default function TimerInput() {
    return (
        <div>
            {/* Task title input */}
            <label for="task-name">Task</label>
            <input id="task-name" type="textbox"></input>
            {/* Hour data input */}
            <label for="hours">Hours</label>
            <input id="hours" type="number" min="0" max="23"></input>

            {/* Minute data input */}
            <label for="minutes">Minutes</label>
            <input id="minutes" type="number" min="0" max="59"></input>

            {/* Seconds data input */}
            <label for="seconds">Seconds</label>
            <input id="seconds" type="number" min="0" max="59"></input>
        </div>
    )
}
