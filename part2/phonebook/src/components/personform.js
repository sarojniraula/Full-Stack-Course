import React from 'react'

const PersonForm = ({addPerson, forHandling}) => {
    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input value={forHandling.newName} onChange={forHandling.handler} />
            </div>
            <div>
                number: <input value={forHandling.newNumber} onChange={forHandling.handleNumber} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm