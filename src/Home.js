import React, { Component } from "react";
import Movie from "./Movie";
import titles from "./Title";

import SearchMovie from "./SearchMovie";
import { withRouter } from "react-router-dom";

class Main extends Component {
  state = {
    search: ""
  };

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  HandleSearch = () => {
    const { search } = this.state;
    console.log(search);
    this.props.history.push({
      pathname: "/search",
      search: "?query=search",
      state: { param: search }
    });
  };

  render() {
    const { search } = this.state;
    return (
      <div>
        <div>
          <h1>my movies</h1>
          <form>
            <input value={search} type="text" onChange={this.handleChange} />
            <button type="button" onClick={this.HandleSearch}>
              Search
            </button>
          </form>
        </div>
        {titles.map(Movietitle => {
          return (
            <div key={Movietitle.id}>
              <Movie title={Movietitle.title} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(Main);
