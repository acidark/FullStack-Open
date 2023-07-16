const Part = (props) =>{
  return(
    <div>{props.part.name} {props.part.exec}</div>
  )
}

const Total = (props) =>{
  return(
    <div>
    Number of exercises {props.sum}
    </div>
  )
}
const Content = (props) =>{
  console.log(props)
  return(
      <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
      </div>
  )
}
const App = () => {
  const course = 'Half stack application development'
  const parts= [{name:'Fundamentals of react',exec:10},
  {name:'Using props to pass data',exec:11},
  {name:'State of component',exec : 20}]

  return (
    <div>
      <h1>{course}</h1>
      <Content part1={parts[0]} part2={parts[1]} part3={parts[2]} />
      <Total sum={parts[0].exec+parts[1].exec+parts[2].exec} />
      {/* <p>Number of exercises {parts[0].exec+parts[1].exec+parts[2].exec}</p> */}
    </div>
  );
}
export default App;
