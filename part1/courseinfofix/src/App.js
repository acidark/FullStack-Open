const Part = (props) =>{
  return(
    <div>{props.name} {props.exer}</div>
  )
}

const Content = (props) =>{
  return(
      <div>
      <Part name={props.part1} exer={props.exec1} />
      <Part name={props.part2} exer={props.exec2} />
      <Part name={props.part3} exer={props.exec3} />
      </div>
  )
}

const App = () => {
  const course = 'Half stack application development'
  const part1 = 'Fundamentals of react'
  const exec1 = 10
  const part2 = 'Using props to pass data'
  const exec2 = 11
  const part3 = 'State of component'
  const exec3 = 20
  return (
    <div>
      <h1>{course}</h1>

      <Content part1={part1} exec1={exec1} part2={part2} exec2={exec2} part3={part3} exec3={exec3} />

      <p>Number of exercises {exec1+exec2+exec3}</p>
    </div>
  );
}

export default App;
