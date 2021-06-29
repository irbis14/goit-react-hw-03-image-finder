import styles from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";
import defaultImg from "./defaultImage.jpg";

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

ImageGalleryItem.defaultProps = {
  src: defaultImg,
};

ImageGalleryItem.propTypes = {
  images: PropTypes.shape({
    id: PropTypes.number,
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
    largeImageURL: PropTypes.string,
  }),
  onShowModal: PropTypes.func,
};

export default ImageGalleryItem;
