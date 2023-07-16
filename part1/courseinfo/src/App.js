
const Header = ({course}) => {
  console.log(course)
  return(

        <h1>{course}</h1>

  )
}
const Part = ({parte}) =>{
  console.log(parte)
  return(
  
  <p>
  {parte.name} {parte.exec}
  </p>
  
  )
}

const Contents = ({partes}) =>{

  const parto = partes[0]
  const parto1 = partes[1]
  const parto2 = partes[2]
  console.log(partes)
  return(
    <div>

      <Part parte={parto} />
      <Part parte={parto1} />
      <Part parte={parto2} />

    </div>
  )
}

const Total = ({partes}) =>{
  console.log(partes)
  // const sum1 = partes[0]
  // const {sum2} = partes[1].exercises
  // const {sum3} = partes[2].exercises
  //const sum1
  const total= partes[0].exec + partes[1].exec + partes[2].exec
  return(
    <div>
      <p>
        Number of exercises is {total}
      </p>
    </div>
  )
}


const App = () => {

  const course = 'Half stack application development'
  const parts = [{name:'Fundamentals of react',exec:10},{name:'Using props to pass data',exec:11},{name:'State of component',exec:20}]
  // const course = 
  //   {name :'Half stack application development', parts:[
  //     {
  //       name: 'Fundamentals of react',
  //     exercises :10,
  //   },
  //     {
  //       name:'Using props to pass data',
  //     exercises:11,
  //   },
  //     {
  //       name:'State of component',
  //     exercises:12,
  //   },
  //     ]
  //   };
    return(
      <div>
        <Header course={course} />
        <Contents partes={parts} />
        <Total partes={parts} />
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
