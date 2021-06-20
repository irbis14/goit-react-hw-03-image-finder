import { Component } from "react";
import Button from "./components/Button";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";
import Modal from "./components/Modal";
import Searchbar from "./components/Searchbar";
import Loader from "react-loader-spinner";

import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
        {/* <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} /> */}
        <Button />
        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;
