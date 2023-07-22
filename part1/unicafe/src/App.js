import { useState } from "react";

  const StatisticsLine = ({value,text}) => {

    return(
      <tr>
        <td>{value}</td>
        <td>{text}</td>
      </tr>
    )
  }
  const Statistics = ({good,bad,neutral}) => {
    // console.log(props)
    // console.log(good,bad,neutral)
    // const total = () = {}
    const total = () => good+bad+neutral
    if (total()===0){
      return (
       <div>No feedback given</div>
      )
    }
    return(
      <div>
        {/* <p>{good} good</p>
        <p>{neutral} neutral</p>
        <p>{bad} bad</p> */}
      <table>
        <tbody>
        <StatisticsLine value={good} text="good" />
        <StatisticsLine value={neutral} text="neutral" />
        <StatisticsLine value={bad} text ="bad" />
        <StatisticsLine value={total()} text="total" />
        <StatisticsLine value={good/total()} text="% positive" />
        <StatisticsLine value={(good-bad)/total()} text="average" />
        {/* <table> */}
          {/* <tbody> */}
        
            {/* <tr> */}
              {/* {total()} all */}
            {/* </tr> */}
            {/* <tr> */}
             {/* {good/total()}% positive */}
            {/* </tr> */}
            {/* <tr> */}
              {/* {(good-bad)/total()} avg */}
            {/* </tr> */}
          {/* </tbody> */}
        {/* // </table> */}
          </tbody>
        </table>
      </div>
    )  
  }
  const Button =({handle,text}) => <button onClick={handle}>{text}</button>
  const App =() =>{
  // const [bad,setBad] = useState(0)
  // const [neutral,setNeutral] = useState(0)
  // const [good,setGood] = useState(0)

  const [click,setClicks] = useState({
    good:0,bad:0,neutral:0
  })

  const handleSetBad = ()=>{
    // console.log(click.bad)
//    const newClick = {
      setClicks({
      ...click,
      bad:click.bad+1
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
//      bad:click.bad,
//      good:click.good
    })
    //setClicks(newClick)
  }
  //const sumOfClicks = (click.bad+click.good+click.neutral)

  return (
    <div>
      <h1>Statistics</h1>
      {/* if(click.total===0) return (<div>No feedback given</div>)  */}
      
      {/* <p>{click.good} good</p>
      <p>{click.neutral} neutral</p>
      <p>{click.bad} bad</p>
      <p>{click.total} all</p> */}
      {/* <StatisticsLine good={click.good} bad={click.bad} neutral={click.neutral} /> */}
      <Statistics good={click.good} bad={click.bad} neutral={click.neutral} /> 

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
