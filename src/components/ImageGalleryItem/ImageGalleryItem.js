import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ images, onShowModal }) => {
  return images.map((image) => {
    return (
      <li key={image.id} className={styles.ImageGalleryItem}>
        <img
          src={image.webformatURL}
          alt={image.tags}
          className={styles.ImageGalleryItem__image}
          onClick={onShowModal}
          data-source={image.largeImageURL}
          data-alt={image.tags}
        />
      </li>
    );
  });
};

export default ImageGalleryItem;
