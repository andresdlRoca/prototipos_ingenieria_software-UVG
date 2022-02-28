import PropTypes from 'prop-types'

const NavigationElements = (props) => {
    const title = props.title
    const image = props.image
    const last_element = props.last_element

    if({image}== 'none')
    {
        return (
            <div>
                <h3> {title} </h3>
            </div>
        )
    }
    else 
    {
        return(
            <div>
                <p>{image}</p>
                <h3> {title} </h3>
            </div>
        )
        
    }

}

NavigationElements.defaultProps = {
    title: 'NO-NAME',
    imagen: 'none',
    last_element: 'False'
}

export default NavigationElements