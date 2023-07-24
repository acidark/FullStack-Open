
const Part = ({part}) =>{
  // const numbers = [1,2,3,4]
  // const sum = numbers.reduce((s,p)=>{
  // console.log(p)
  // return s+p},0);
  
  return( 
  <p>
  {part.name} {part.exercises}
  </p>
  
  )
  }

const Header = ({header}) => {
  console.log(header)
  return(
  <div>
    <h2>{header}</h2>
  </div>
  )
}

const Content = ({parts}) => {
  return( 
    <div>
      {parts.map((part) => <Part key={part.id} part={part} />)}      
    </div>
   )
 }  
const Course = ({course}) => {
  // console.log(course.name)
    // console.log(courses[0].parts[0].exercises)
    const total = course.parts
    .map(part=>part.exercises)
    .reduce((s,p) => s+p)
    return(
    <div>
      {/* {course.map((course)=> <Header key={course.id} course={course} />)} */}

      {/* {courses.map((par))} */}
      <Header header={course.name} />
      <Content parts={course.parts} />
      <p><b>Number of exercises is {total}</b></p>
    </div>
    )
}
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <div>
    <h1>Web development curriculum</h1>
    {courses.map((course) => <Course key={course.id} course={course} />)}
    </div>
  )
}



export default App
