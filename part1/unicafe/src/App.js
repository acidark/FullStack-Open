import { useState } from "react";

  const Statistics = ({good,bad,neutral,total}) => {
    // console.log(props)
    // console.log(good,bad,neutral)
    // const total = () = {}
    if (total===0){
      return (
        <div>No feedback given</div>
      )
    }
    return(
      <div>
        <p>{good} good</p>
        <p>{neutral} neutral</p>
        <p>{bad} bad</p>
        <p>{good/total}% positive</p>
        <p>{(good-bad)/total} avg</p>
      </div>
    )  
  }
  const Button =({handle,text}) => <button onClick={handle}>{text}</button>
  const App =() =>{
  // const [bad,setBad] = useState(0)
  // const [neutral,setNeutral] = useState(0)
  // const [good,setGood] = useState(0)

  const [click,setClicks] = useState({
    good:0,bad:0,neutral:0,total:0
  })

  const handleSetBad = ()=>{
    // console.log(click.bad)
//    const newClick = {
      setClicks({
      ...click,
      bad:click.bad+1,
      total:click.total+1
      //neutral:click.neutral,
      //good:click.good
      //good:click.good,
      //neutral:click.neutral
    })
    //setClicks(newClick)
  }
  const handleSetGood = () =>{
    //const newClick = {
    setClicks(
    {...click,
      good : click.good+1,
      total:click.total+1
//      bad:click.bad,
//      neutral:click.neutral

    })
    //setClicks(newClick)
  }

  const handleSetNeutral = () =>{
    setClicks({
    //const newClick = {
      ...click,
        neutral:click.neutral+1,
        total:click.total+1
//      bad:click.bad,
//      good:click.good
    })
    //setClicks(newClick)
  }
  //const sumOfClicks = (click.bad+click.good+click.neutral)

  return (
    <div>
      <h1>stats</h1>

      {/* <p>{click.good} good</p>
      <p>{click.neutral} neutral</p>
      <p>{click.bad} bad</p>
      <p>{click.total} all</p> */}
      <Statistics good={click.good} bad={click.bad} neutral={click.neutral} total={click.total} />
      {/* <p>{click.good/click.good+click.bad+click.neutral} %positive</p> */}
      {/* <p>{(click.good+click.bad)/sumOfClicks} avg</p> */}

      <h1>give feedback</h1>
      <Button handle={handleSetGood} text="good" />
      <Button handle={handleSetNeutral} text="neutral" />
      <Button handle={handleSetBad} text="bad" />
      
      
      {/* <button onClick={()=>setGood(good+1)}>good</button> */}
      {/* <button onClick={handleSetBad}>bad</button> */}
      {/* <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
      <button onClick={()=>setBad(bad+1)}>bad</button> */}
      
    </div>
 );
}

export default App;
