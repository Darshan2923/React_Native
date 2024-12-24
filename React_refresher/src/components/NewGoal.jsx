import React from 'react'
import '../App.css';

const NewGoal = (props) => {

    const [inputText, setInputText] = React.useState('');

    const addGoalHandler = (event) => {
        event.preventDefault();
        const newGoal = {
            id: Math.random().toString(),
            text: inputText
        };
        props.onAddGoal(newGoal);
        setInputText('');
    }

    const textChangeHandler = (event) => {
        setInputText(event.target.value);
    }

    return (
        <form className='new-goal' onSubmit={addGoalHandler}>
            <input value={inputText} onChange={textChangeHandler} type="text" />
            <button type='submit'>Add Goal</button>
        </form>
    )
}

export default NewGoal
