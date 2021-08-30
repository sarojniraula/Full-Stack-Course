import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <div>{props.name}: {props.exercises}</div>
  )
}

const Content = (props) => {
    const [part1, part2, part3] = props.parts;
    return(
     <div>
        <Part name = {part1.name} exercises = {part1.exercises} />
        <Part name = {part2.name} exercises = {part2.exercises} />
        <Part name = {part3.name} exercises = {part3.exercises} />
     </div>
	)
}

const Total = (props) => {
  const [part1, part2, part3] = props.parts;
  const total = part1.exercises + part2.exercises + part3.exercises;
  return (
    <div>Number of exercises: {total}</div>
  )
}

const App = () => {
    const course = {
     name: 'Half Stack application development',
     parts: [
      {
       name: 'Fundamentals of React',
       exercises: 10
	  },
      {
       name: 'Using props to pass data',
       exercises: 7
	  },
      {
       name: 'State of a component',
       exercises: 14
	  }
	 ]
	}


    return (
     <div>
        <Header course = {course.name} />
        <Content parts = {course.parts} />
        <Total parts = {course.parts} />
     </div>
	)
}

export default App
