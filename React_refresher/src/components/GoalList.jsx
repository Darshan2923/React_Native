import React from 'react'

const GoalList = ({ goals }) => {
    return (
        <ul className="goal-list">
            {console.log(goals)}

            {[<li key='1'>Hi</li>,
            <li key='2'>Hello</li>]}


            {goals.map(goal => (
                <li key={goal.id}>{goal.text}</li>
            ))}
        </ul>
    )
}

export default GoalList