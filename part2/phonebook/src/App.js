import React, {useState} from 'react'
import PersonForm from './components/personform'
import Filter from './components/filter'
import Persons from './components/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [filterPersons, setFilterPersons] = useState(persons)

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.filter(p => p.name === newName).length > 0) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNumber('')
    }
  }

  const handler = (event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNumber(event.target.value)
  }

  const addData = {
    newName,
    newNumber,
    handler,
    handleNumber
  }

  const toShow = (event) => {
    setNewFilter(event.target.value)
    setFilterPersons(persons.filter(p =>
      (p.name.toUpperCase().indexOf(event.target.value.toUpperCase()) !== -1)))
  }

  return(
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} display={toShow} />
      <h3>add a new</h3>
      <PersonForm addPerson={addPerson} forHandling={addData} />
      <h3>Numbers</h3>
      {newFilter === ''
        ? <Persons filterPerson={persons} />
        : <Persons filterPerson={filterPersons} />
      }
    </div>
  )
}

export default App