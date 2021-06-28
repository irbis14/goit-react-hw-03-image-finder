import { Component } from "react";
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
            onClick={this.props.onClose}
          ></button>
        </div>
      </div>
    );
  }
}

export default Modal;
