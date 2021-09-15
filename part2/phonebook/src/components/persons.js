import React from 'react'

const Persons = ({filterPerson}) => {
    return (
        filterPerson.map(p=>
            <div key={p.id}>{p.name}{p.number}</div>)
    )
}

export default Persons