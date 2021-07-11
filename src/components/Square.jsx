import React from 'react';

const Square = props => {
  const { value } = props;
  console.log(value);
  return (
    <>
      <button type="button">{value}</button>
    </>
  );
};

export default Square;
