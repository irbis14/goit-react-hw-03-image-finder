import styles from "./Button.module.css";

const Button = ({ fetchArticles }) => {
  return (
    <button className={styles.Button} type="button" onClick={fetchArticles}>
      Load more
    </button>
  );
};

export default Button;
