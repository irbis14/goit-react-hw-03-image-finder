import { Component } from "react";
import axios from "axios";

import Button from "./components/Button";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";
import Modal from "./components/Modal";
import Searchbar from "./components/Searchbar";
import Loader from "react-loader-spinner";

import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "21304546-dfd139bdae93d70ad7d2573af";
const PARAM = "photo&orientation=horizontal";

class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchArticles();
    }
  }

  onSearchQuery = (query) => {
    this.setState({ searchQuery: query });
  };

  fetchArticles = () => {
    const { searchQuery, page } = this.state;
    return axios
      .get(
        `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=${PARAM}&per_page=12`
      )
      .then((response) => {
        this.setState((prevState) => ({
          images: [prevState.images, ...response.data.hits],
          page: prevState.page + 1,
        }));
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
        <Button onClick={this.fetchArticles} />
        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;
