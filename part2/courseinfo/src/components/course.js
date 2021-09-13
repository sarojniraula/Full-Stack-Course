import React from 'react'

const Course = ({course}) => {
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }
  
  const Header = (props) => <h2>{props.name}</h2>
  
  const Part = (props) => {
    return (
      <div>
        {props.name}: {props.exercises}
      </div>
    )
  }
  
  const Content = ({parts}) => {
    const inParts = parts.map((stuff) => <Part key={stuff.id} name={stuff.name} exercises={stuff.exercises} />)
  
    return (
      <div>
        {inParts}
      </div>
    )
  }
  
  const Total = ({parts}) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
      <div><strong>total of {total} exercises</strong></div>
    )
  }

  export default Course