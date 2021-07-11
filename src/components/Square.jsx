import React from 'react';

const Square = props => {
  const { value, children } = props;
  //   console.log(value);
  //   console.log(props);
  return (
    <>
      <button type="button" className="square">
        {value}
      </button>
    </>
  );
};

export default Square;
