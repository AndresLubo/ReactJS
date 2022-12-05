import React, { Component } from "react";
import PropTypes from 'prop-types';

class Props extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h2>{this.props.porDefecto}</h2>
      </>
    );
  }
}

Props.defaultProps = {
    porDefecto: 'Esto es una propiedad por defecto'
}

Props.propTypes = {
  porDefecto: PropTypes.string
}

export default Props;
