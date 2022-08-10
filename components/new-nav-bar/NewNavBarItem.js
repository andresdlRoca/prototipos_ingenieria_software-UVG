import React from 'react'
import { Link } from 'react-router-dom'

const NewNavBarItem = (props) => {
    return (
        <li className='item-new-navbar'>
            {(props.TypeOfItem && props.PageReference)&&(
                <Link to={props.PageReference} className="item-new-nav-bar-link">
                    {props.text}
                </Link>
            )}
            {!(props.TypeOfItem && props.PageReference) &&(
                props.text
            )}
        </li>
        
    )
}

export default NewNavBarItem