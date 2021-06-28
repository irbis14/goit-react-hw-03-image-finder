import styles from "./Button.module.css";

const Button = ({ fetchImages }) => {
  return (
    <div className={styles.Button__container}>
      <button className={styles.Button} type="button" onClick={fetchImages}>
        Load more
      </button>
    </div>
  );
};

export default Button;
