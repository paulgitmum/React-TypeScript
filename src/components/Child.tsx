import React from 'react'

interface Props {
    name:String,
    // number is optional parameter
    number?:Number, 
}
const Child:React.FC <Props> = (props) => {

    return (
        <div>
            <h2>{props.name}</h2>
            <h2>{props.number}</h2>
        </div>
    )
}

export default Child
