import React, { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import Input from './components/Input';
// import notes from './notes';


const App = () => {
  const [notes, setNotes] = useState([])

  function addHandler(input) {
    input.title && input.content &&
      setNotes(prevNotes => {
        console.log(prevNotes);
        return [...prevNotes, input]
      })
  }

  function deleteHandler(id) {
    console.log(id);
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id
      })
    })
  }

  return (
    <>
      <Header />
      <Input addHandler={addHandler}
      />
      {notes.map((note, i) =>
      (
        <Note
          key={i}
          id={i}
          title={note.title}
          content={note.content}
          deleteHandler={deleteHandler}
        />
      ))}
      <Footer />
    </>
  )
}

export default App
