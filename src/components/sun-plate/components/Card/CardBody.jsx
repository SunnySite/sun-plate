import PropTypes from "prop-types";

const CardBody = ({ children = "", ClassName = "" }) => {
  return (
    <div
      className={`text-l mt-5 font-medium text-gray-900 dark:text-white ${ClassName}`}
    >
      {children}
    </div>
  );
};

CardBody.propTypes = {
  children: PropTypes.element,
  ClassName: PropTypes.string,
};

export default CardBody;
