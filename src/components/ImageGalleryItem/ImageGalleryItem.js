import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = () => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img src="" alt="" className={styles.ImageGalleryItem__image} />
    </li>
  );
};

export default ImageGalleryItem;
