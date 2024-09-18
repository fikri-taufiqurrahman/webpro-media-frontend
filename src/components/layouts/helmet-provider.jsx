import React from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const HelmetProvider = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

HelmetProvider.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HelmetProvider;
