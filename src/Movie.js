import React, { Component } from "react";

class Movie extends Component {
  constructor() {
    super();
    this.state = {
      pictures: {},
      error: null,
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=3fe2ee61")
      .then(results => results.json())
      .then(res => {
        // console.log("res console", res);
        this.setState({ pictures: res, loading: false });
      })
      .catch(err => {
        // console.log("catch console", err);
        this.setState({ error: err.data, loading: false });
      });
  }

  render() {
    const { pictures, error, loading } = this.state;
    return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="container2">
            <div className="container1">
              {pictures ? (
                /* pictures.map((pic, index) => { */
                /* return ( */
                <div>
                  <img alt="unable to load" src={pictures.Poster} />
                  <p>{pictures.Title}</p>
                </div>
              ) : (
                <div>{error && "Error loading picture"}</div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Movie;
