import React from "react"

import Timer from "../components/timer"

export default class TimerInput extends React.Component {
    state = {
        taskName: "",
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    handleSubmit = event => {
        Timer(this.state);
    }

    render() {
        return (
            <div>
            <form>
                {/* Task title input */}
                <label>
                    Task
                    <input type="textbox" name="taskName"></input>
                </label>

                {/* Hour data input */}
                <label>
                    Hours
                    <input type="number" name="hours" min="0" max="23"></input>
                </label>

                {/* Minute data input */}
                <label>
                    Minutes
                    <input id="minutes" type="number" name="minutes" min="0" max="59"></input>
                </label>

                {/* Seconds data input */}
                <label>
                    Seconds
                    <input id="seconds" type="number" name="seconds" min="0" max="59"></input>
                </label>

                <button type="submit">Add timer</button>
            </form>
            </div>
        )
    }
}
