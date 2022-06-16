import axios from "axios";

const KEY = "AIzaSyDVp-hEG76X6zGfT93ojBsEZkYeAF7YjJU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
