import React from 'react'

const Filter = ({value, display}) => {
    return (
        <div>
            filter shown with <input
            value={value} onChange={display} />
        </div>
    )
}

export default Filter