import React from 'react'
import GoalList from './components/GoalList'
import './App.css'
import NewGoal from './components/NewGoal'

// const App = () => {
//   return (
//     <>
//       {/* // Both are same
//     // React.createElement('h1', { }, 'Hello World')
//       // OR */}
//       <h1>Hello World</h1>

//       {/* // Below are also same
//     // React.createElement('h2', {title:'This works'}, 'Hello World')
//       // OR */}
//       <h2 title='This works'>Hello World</h2>
//     </>
//   )
// }

// // // Below is same as above

class App extends React.Component {

  render() {

    const addNewGoalHandler = (newGoal) => {
      courseGoals.push(newGoal);
      console.log(courseGoals);
    }

    const courseGoals = [
      // Array of objects
      { id: 'cg1', text: 'Finish the course' },
      { id: 'cg2', text: 'Learn all about the course main topic' },
      { id: 'cg3', text: 'Help other students in the course Q&A' }
    ]
    return (
      <div className='course-goals'>
        <h2>Course Goals</h2>
        <GoalList goals={courseGoals} />
        <NewGoal onAddGoal={addNewGoalHandler} />

      </div>
    )
  }
}

export default App