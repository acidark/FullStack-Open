
const Header = ({course}) => {
  console.log(course)
  return(
    // <div>
    //   //<p>
        <h1>{course}</h1>
    //   </p>
    // </div>
  )
}
const Part = ({part}) =>{
  console.log(part)
  return(
  <p>
  {part.name} {part.exercises}
  </p>
  )
}

const Contents = ({partes}) =>{
  console.log(partes)
  return(
    <div>
      
      {/* //{props.part} {props.exec} */}
      
      <Part part={partes[0]} />
      <Part part={partes[1]} />
      <Part part={partes[2]} />
      
      {/* {partes[0].name} {partes[0].exercises}
      </p>
      <p>
      {partes[1].name} {partes[1].exercises}
      </p>
      <p>
      {partes[2].name} {partes[2].exercises}
      </p> */}
    </div>
  )
}

const Total = ({partes}) =>{
  console.log(partes)
  // const sum1 = partes[0]
  // const {sum2} = partes[1].exercises
  // const {sum3} = partes[2].exercises
  //const sum1
  const total= partes[0].exercises + partes[1].exercises + partes[2].exercises
  return(
    <div>
      <p>
        Number of exercises is {total}
      </p>
    </div>
  )
}
// const Parts = () =>{
//   const
// }

const App = () => {
  
  const course = 
    {name :'Half stack application development', parts:[
      {
        name: 'Fundamentals of react',
      exercises :10,
    },
      {
        name:'Using props to pass data',
      exercises:11,
    },
      {
        name:'State of component',
      exercises:12,
    },
      ]
    };
    return(
      <div>
        <Header course={course.name} />
        <Contents partes={course.parts} />
        <Total partes={course.parts} />
      </div>
    )
  
  // const course ='Half stack application development'
  // const part1='Fundamentals of react'
  // const exec1=10
  // const part2='Using props to pass data'
  // const exec2=20
  // const part3='State of component'
  // const exec3=14
  // const sum = exec1+exec2+exec3
  //   return(
  //   <div>
  //     <Header course ={course} />
  //     <Contents part={part1} exec={exec1} />
  //     <Contents part={part2} exec={exec2} />
  //     <Contents part={part3} exec={exec3} />
  //     <Total sum={sum} />
  //   </div>
    
  //)
}

export default App;
