import PropTypes from 'prop-types'; 

const Input = ({handleChange, type, label="username", value, placeholder=""}) => {
    const captalizedLabel = label.charAt(0).toUpperCase() + label.substring(1);
  return (
    <>
        <label>{captalizedLabel}: 
            <input 
                style={inputStyle}
                onChange={handleChange} 
                type={type}
                placeholder={placeholder ? placeholder : label}
                value={value}
                name={label}/>
        </label>
    </>
  )
}

const inputStyle = {
    marginLeft: "10px", 
}

Input.propTypes = {
    handleChange:PropTypes.func, 
    type : PropTypes.string, 
    label : PropTypes.string, 
    value: PropTypes.string, 
    placeholder: PropTypes.string, 
}

export default Input
