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
      <p>{part1} {exec1}</p>
      <p>{part2} {exec2}</p>
      <p>{part3} {exec3}</p>
      <p>Number of exercises {exec1+exec2+exec3}</p>
    </div>
  );
}

export default App;
