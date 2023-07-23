const Part = ({name,exercises}) =><div>{name} {exercises}</div>
const Header = ({header}) => {
  // console.log(header) 
  return(
  <div>
    <h1>{header}</h1>
  </div>
  )
}

const Content = ({parts}) => 
  // console.log(parts[0])
  // console.log(parts)
  // return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </div>
  // )
// }  
const Course = ({course}) => 
    <div>

      <Header header={course.name} />
      <Content parts={course.parts} />
    </div>
   
  

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}



export default App
