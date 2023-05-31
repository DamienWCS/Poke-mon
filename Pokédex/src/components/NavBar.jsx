import PropTypes from "prop-types";

const NavBar = ({ onPreviousClick, onNextClick }) => {
  return (
    <div>
      <button onClick={onPreviousClick}>Précédent</button>
      <button onClick={onNextClick}>Suivant</button>
    </div>
  );
};

NavBar.propTypes = {
  onPreviousClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
};

export default NavBar;
