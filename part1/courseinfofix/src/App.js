const Part = (props) =>{
  return(
    <div>{props.part.name} {props.part.exec}</div>
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
  const part1 = {name:'Fundamentals of react',exec:10}
  const part2 = {name:'Using props to pass data',exec:11}
  const part3 = {name:'State of component',exec : 20}
  return (
    <div>
      <h1>{course}</h1>
      <Content part1={part1} part2={part2} part3={part3} />
      <p>Number of exercises {part1.exec+part2.exec+part3.exec}</p>
    </div>
  );
}
export default App;
