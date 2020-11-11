import React, { Component } from "react";
import SearchForm from "./SearchForm";
import MoviesContainer from "./MoviesContainer";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
class Landing extends Component {
  render() {
    const loading = this.props.loading;
    console.log(loading);
    return (
      <div className="container">
        <SearchForm />
        {loading ? <Spinner /> : <MoviesContainer />}
      </div>
    );
  }
}

export default connect((state) => {
  return {
    loading: state.movies.loading,
  };
})(Landing);
