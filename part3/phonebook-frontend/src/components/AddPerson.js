const Addp = ({checkingParams,newName,handleNewName,newNumber,handleNewNumber}) =>{
    return (
    <form onSubmit={checkingParams}>
    <div>
      name: <input value={newName} onChange={handleNewName} />
    </div>
    <div>
      number: <input value={newNumber} onChange={handleNewNumber} />
    </div>          
    <div>
    <button type="submit">add</button>
    </div>
    </form> 
    )
}

export default Addp