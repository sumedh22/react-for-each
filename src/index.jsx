import React from "react";
import PropTypes from "prop-types";

export const For = props => {
  const { data = [], noData, itemRenderer } = props;
  return (
    <React.Fragment>
      {data.length === 0 && noData()}
      {data.map((...args) => itemRenderer(...args))}
    </React.Fragment>
  );
};
For.propTypes = {
  data: PropTypes.array.isRequired,
  itemRenderer: PropTypes.func.isRequired
};
