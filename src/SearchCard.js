import React from "react";

const SearchCard = ({ Title, Year, imdbID, Type, Poster,src }) => {
  return(
  <div>
    <div>{Title}</div>
    <div>{Year}</div>
    <div>{imdbID}</div>
    <div>{Type}</div>
    <div>{Poster}</div>
    <img src = {src}/>
  </div>);
};

export default SearchCard;
