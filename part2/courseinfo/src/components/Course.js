const Part = ({part}) =>{ 
  return( 
  <p>
  {part.name} {part.exercises}
  </p> 
  )
}

const Header = ({header}) => {
//   console.log(header)
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

  export default Course