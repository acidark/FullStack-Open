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
  const course = {name: 'Half stack application development',parts: [{name:'Fundamentals of react',exec:10},
  {name:'Using props to pass data',exec:11},
  {name:'State of component',exec : 20}]}

  return (
    <div>
      <h1>{course.name}</h1>
      <Content part1={course.parts[0]} part2={course.parts[1]} part3={course.parts[2]} />
      <Total sum={course.parts[0].exec+course.parts[1].exec+course.parts[2].exec} />
    </div>
  );
}
export default App;
