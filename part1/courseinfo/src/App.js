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
const Contents = (parte) =>{

  //const parto = partes[0]
  //const parto1 = partes[1]
  //const parto2 = partes[2]
  console.log(parte)
  return(
    <div>
      <Part parte={parte.parte1} />
      <Part parte={parte.parte2} />
      <Part parte={parte.parte3} />
      {/* <Part parte={parto} />
      <Part parte={parto1} />
      <Part parte={parto2} /> */}

    </div>
  )
}
const Total = ({sum}) =>{
  //console.log(partes)
  //const sum = {partes}
  //const total= partes[0].exec + partes[1].exec + partes[2].exec
  return(
    <div>
      <p>
        Number of exercises is {sum}
      </p>
    </div>
  )
}
const App = () => {

  const course = 'Half stack application development'
  //const parts = [{name:'Fundamentals of react',exec:10},{name:'Using props to pass data',exec:11},{name:'State of component',exec:20}]
  const part1={name:'Fundamentals to react',exec:10}
  const part2={name:'Using props to pass data',exec:11}
  const part3={name:'State of component',exec:20}
    return(
      <div>
        <Header course={course} />
        {/* <Contents partes={parts} /> */}
        {/* <Contents partes={part1} />
        <Contents partes={part2} />
        <Contents partes={part3} /> */}
        <Contents parte1={part1} parte2={part2} parte3={part3} />
        {/* <Total sum={part1.exec+part2.exec+part3.exec} />  */}
        <Total sum={part1.exec+part2.exec} />
      </div>
    )
}
export default App;