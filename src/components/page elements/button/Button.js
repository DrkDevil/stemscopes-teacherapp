import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    return (
        <button 
            onClick={onClick} 
            style={{backgroundColor: color}} 
            className='btn'
            >
            {text}
            <i class="fal fa-caret-down"></i>
        </button>
    )
}

Button.defaultProps = {
    color: '#106A9F',
    text: 'Button'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button