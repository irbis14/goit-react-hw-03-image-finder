import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ fetchImages }) => {
  return (
    <div className={styles.Button__container}>
      <button className={styles.Button} type="button" onClick={fetchImages}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  fetchImages: PropTypes.func.isRequired,
};

export default Button;
