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
    const total = () => good+bad+neutral
    if (total()===0){
      return (
       <div>No feedback given</div>
      )
    }
    return(
      <div>
      <table>
        <tbody>
        <StatisticsLine value={good} text="good" />
        <StatisticsLine value={neutral} text="neutral" />
        <StatisticsLine value={bad} text ="bad" />
        <StatisticsLine value={total()} text="total" />
        <StatisticsLine value={good/total()} text="% positive" />
        <StatisticsLine value={(good-bad)/total()} text="average" />
          </tbody>
        </table>
      </div>
    )  
  }
  const Button =({handle,text}) => <button onClick={handle}>{text}</button>
  const App =() =>{
  const [click,setClicks] = useState({
    good:0,bad:0,neutral:0
  })
  const handleSetBad = ()=>{

      setClicks({
      ...click,
      bad:click.bad+1

    })
  }
  const handleSetGood = () =>{
    setClicks(
    {...click,
      good : click.good+1,
    })
  }

  const handleSetNeutral = () =>{
    setClicks({
      ...click,
        neutral:click.neutral+1,

    })
  }
  return (
    <div>
      <h1>Statistics</h1>
      <Statistics good={click.good} bad={click.bad} neutral={click.neutral} /> 
      <h1>give feedback</h1>
      <Button handle={handleSetGood} text="good" />
      <Button handle={handleSetNeutral} text="neutral" />
      <Button handle={handleSetBad} text="bad" />     
    </div>
 );
}

export default App;
