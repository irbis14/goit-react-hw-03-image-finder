import { Component } from "react";

import Button from "./components/Button";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";
import Modal from "./components/Modal";
import Searchbar from "./components/Searchbar";
import Loader from "react-loader-spinner";
import { fetchImages } from "./services/picturesApi";
import { windowsScrolling } from "./utlis";

import "./App.css";
import styles from "./components/Loader/Loader.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    page: 1,
    isLoading: false,
    error: null,
    largeImageURL: "",
    largeImageAlt: "",
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onSearchQuery = (query) => {
    this.setState({ images: [], searchQuery: query, page: 1, error: null });
  };

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    const options = { searchQuery, page };

    this.setState({ isLoading: true });

    fetchImages(options)
      .then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }));
        windowsScrolling();
      })
      .catch((error) => this.setState({ error }))
      .finally(() => setTimeout(this.setState({ isLoading: false }), 500));
  };

  onShowModal = (e) => {
    this.setState({
      largeImageURL: e.target.dataset.source,
      largeImageAlt: e.target.dataset.alt,
    });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onModalButtonClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const {
      images,
      isLoading,
      error,
      showModal,
      largeImageURL,
      largeImageAlt,
    } = this.state;
    const loadingMoreButtonCondition = images.length > 0 && !isLoading;
    return (
      <div>
        <Searchbar onSubmit={this.onSearchQuery} />
        {isLoading && (
          <Loader
            className={styles.Loader}
            type="BallTriangle"
            color="#00BFFF"
            height={100}
            width={100}
          />
        )}
        {error && (
          <h2 style={{ textAlign: "center" }}>Oops, something went wrong :/</h2>
        )}
        <ImageGallery>
          <ImageGalleryItem images={images} onShowModal={this.onShowModal} />
        </ImageGallery>
        {loadingMoreButtonCondition && (
          <Button fetchImages={this.fetchImages} />
        )}
        {showModal && (
          <Modal
            onButtonClose={this.onModalButtonClose}
            onClose={this.toggleModal}
            largeImageURL={largeImageURL}
            largeImageAlt={largeImageAlt}
          />
        )}
      </div>
    );
  }
}

export default App;
