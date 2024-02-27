import PropTypes from "prop-types";

const CardHeader = ({ children = "", ClassName = "" }) => {
  return (
    <h5
      className={`text-xl font-medium text-gray-900 dark:text-white ${ClassName}`}
    >
      {children}
    </h5>
  );
};

CardHeader.propTypes = {
  children: PropTypes.element,
  ClassName: PropTypes.string,
};

export default CardHeader;
