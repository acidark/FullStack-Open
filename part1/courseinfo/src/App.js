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
    return(
      <div>
        <Header course={course} />
        <Contents partes={parts} />
        <Total partes={parts} />
      </div>
    )
}
export default App;