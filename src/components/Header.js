import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={!showAdd ? "Add" : "Close"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

// CSS style in js
// const headingStyle={
//     color: 'red',
//     backgroundColor: 'black',
// }

Header.propsTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
