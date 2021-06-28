import { Component } from "react";
import axios from "axios";

import Button from "./components/Button";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";
import Modal from "./components/Modal";
import Searchbar from "./components/Searchbar";
import Loader from "react-loader-spinner";
import picturesApi from "./services/picturesApi";

import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onSearchQuery = (query) => {
    this.setState({ images: [], searchQuery: query, page: 1 });
  };

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    const options = {
      searchQuery,
      page,
    };

    picturesApi.fetchImages(options).then((images) => {
      this.setState((prevState) => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1,
      }));
    });
  };

  windowsScrolling = () => {
    // const totalScrollHeight = document.body.clientHeight;
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onSearchQuery} />
        <ImageGallery>
          <ImageGalleryItem images={images} />
        </ImageGallery>
        {/* <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} /> */}
        <Button fetchImages={this.fetchImages} />
        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;
