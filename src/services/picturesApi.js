import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "21304546-dfd139bdae93d70ad7d2573af";
const PARAM = "photo&orientation=horizontal";

const fetchImages = ({ searchQuery = "", page = 1, pageSize = 12 }) => {
  return axios
    .get(
      `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=${PARAM}&per_page=${pageSize}`
    )
    .then((response) => response.data.hits);
};

export { fetchImages };
