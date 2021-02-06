import React, { Component } from "react";
import Loader from "react-loader-spinner";

class LoaderSpinner extends Component {
  render() {
    return (
      <Loader
        type="ThreeDots"
        color="#4169E1"
        height={200}
        width={400}
        timeout={3000}
      />
    );
  }
}

export default LoaderSpinner;
