import { useState } from 'react'

const App = () => {
  // console.log({maximum})
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [anecdoteScore,setAnecdoteScore] = useState(new Uint8Array(anecdotes.length))
  // const [maxim,setMaxi] = useState(0)
  const nextSelect = () => {
    let rand = getRandom()
    while(selected === rand){ (
        rand = getRandom()
    )}
    setSelected(rand)

  }
   const maximum = () => {
    let max = anecdoteScore[0];
    let maxi = 0;
    anecdoteScore.forEach(function(val,index){
      if(val > max){
        max = val
        maxi = index
       }
      })
     return {
      max : max,
      maxi : maxi
     }
     //setMaxi(maxi)
   }

  const result = maximum()
  const vote = () =>{    
    const copy = [...anecdoteScore]
    copy[selected]+=1
    setAnecdoteScore(copy)
  }
  const getRandom = () =>{
     let min = Math.ceil(0)
     let max = Math.floor(anecdotes.length-1)
     let random = Math.floor(Math.random()*(max-min+1)+min)
    return random;
   }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {anecdoteScore[selected]} votes</p>
      <div>
        <p>
          <button onClick={nextSelect}>next</button>
          <button onClick={vote}>vote</button>     
        </p> 
      <h1>Most voted anecdote</h1>       
        {anecdotes[result.maxi]}
        <p>has {result.max} votes</p>
      </div>
    </div>
  )
}

export default App