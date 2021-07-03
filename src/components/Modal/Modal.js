import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.onEscapeClose);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onEscapeClose);
  }

  onEscapeClose = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  onBackdropClose = (e) => {
    if (e.target.nodeName !== "IMG") {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, largeImageAlt } = this.props;
    return (
      <div className={styles.Overlay} onClick={this.onBackdropClose}>
        <div className={styles.Modal}>
          <img src={largeImageURL} alt={largeImageAlt} />
          <button
            type="button"
            className={styles.Modal__close}
            onClick={this.props.onModalButtonClose}
          ></button>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string,
  largeImageAlt: PropTypes.string,
};

export default Modal;
