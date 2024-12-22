import PropTypes from "prop-types";

const Button = ({ text, onClick, style, className, disabled, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded flex items-center  gap-2 ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      style={style}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};


Button.propTypes = {
    text: PropTypes.string.isRequired,          
    onClick: PropTypes.func,                   
    style: PropTypes.object,                   
    className: PropTypes.string,                
    disabled: PropTypes.bool,                   
    icon: PropTypes.element,                     
  };
  
  Button.defaultProps = {
    onClick: () => {},                         
    style: {},                                 
    className: '',                               
    disabled: false,                         
    icon: null,                               
  };

export default Button;
