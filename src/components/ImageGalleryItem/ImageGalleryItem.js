import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ images }) => {
  return images.map((image) => {
    return (
      <li key={image.id} className={styles.ImageGalleryItem}>
        <img
          src={image.webformatURL}
          alt={image.tags}
          className={styles.ImageGalleryItem__image}
        />
      </li>
    );
  });
};

export default ImageGalleryItem;
