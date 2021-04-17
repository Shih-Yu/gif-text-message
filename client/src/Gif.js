import React, { useState, useEffect } from "react";
import axios from "axios";

const { REACT_APP_GIF_KEY } = process.env;
export default function Gif() {
  const [gif, setGif] = useState("");
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${REACT_APP_GIF_KEY}&q=enjoy&limit=1&offset=0&rating=g&lang=en`;
  const getGif = async () => {
    const { data } = await axios.get(url);
    const gifUrl = data.data.image_url;
    setGif(gifUrl);
  };
  useEffect(() => {
    getGif();
  }, []);

  const handleClick = () => getGif();
  return (
    <>
      <h1>Please Enjoy!</h1>
      <img src={gif} alt="random" />
      <button onClick={handleClick}>Click</button>
    </>
  );
}
