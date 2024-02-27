import PropTypes from "prop-types";

const Card = ({ children, ClassName = "" }) => {
  
  return (
    <div className={`bg-white rounded-md shadow text-black sm:p-6 md:p-8 ${ClassName}`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.element,
  ClassName: PropTypes.string,
};

export default Card;
