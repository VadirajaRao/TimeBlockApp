import React from "react"
import { Link } from "gatsby"

export default function About() {
    return (
        <div>
            <h1>TimeBlockApp</h1>

            <Link to="/">Main</Link>
            <Link to="/get-started/">Begin</Link>
            
            <p>
                It is known that working on mulltiple things at the same time
                is not productive. But we need to work on multiple things at the
                same time.
            </p>
            <p>
                One of the efficient ways to get multiple things done at the
                same time is by dividing your time into blocks of small periods.
                You complete a task within that block of time and then you
                switch the task.Though much can't be done in a single block of
                time, when chained up we can get multiple things done to a
                significant extent.
            </p>
            <p>
                The blocks are supposed to be short so you can switch between
                the tasks and keep the momentum going in all of them. But one
                has to make sure that the blocks are not too short at the same
                time. The length of each block is left to the individual's
                choice.
            </p>
        </div>
    )
}
