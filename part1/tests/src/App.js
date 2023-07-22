
import React from 'react'
import Note from './components/Note'

const App = ({notes}) =>{
 return(
    <div>
      <ul>
        {notes.map(note=>
          <Note key={note.id} notek={note} />
          )}
      </ul>
    </div>
  );
}

export default App;
