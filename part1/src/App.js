import logo from './logo.svg';
import './App.css';


// const Hello = (props) => {
//   console.log(props)
//   return(
//     <div>
//       {/* <p>Hello world</p> */}
//       <p>Hello {props.name} you are {props.age} years old</p>
//     </div>
//   )
// }


const App = () => {
  const friends = [
    {name : "fer" ,age : 20},
    {name : "fercho" ,age : 21}
  ]
  // const now = new Date()
  // const a = 10
  // const b = 15
  // const name = 'Fercho'
  // const age = 21
  // console.log(now,a+b)

  return (
    <div>
      {/* <p>Hello world, the time is {now.toString()}</p>
      <p>
        {a} plus {b} is {a+b} */}
      {/* <h1>
          Greetings
      </h1> */}

      {/* <Hello name ='Fer' age ={10+10} /> */}
      {/*<Hello name='Maya' age={26 + 10} />*/}
      {/* <Hello name = {name} age={age} /> */}
      <p>{friends[0].name},{friends[0].age}</p>
      <p>{friends[1].name},{friends[1].age}</p>

      {/* <Hello />
      <Hello /> */}
      {/* </p> */}
    </div>
  )
}
// function App() {
//   //console.log('hello from component')
//   //console.log('hello from componen2')

//   const now = new Date()
//   const a = 10
//   const b = 5
//   console.log(now,a+b)
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
        
//         <p>Hello world it is now {now.toString()}</p>
//         <p>
//           {a} plus {b} is {a+b}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
