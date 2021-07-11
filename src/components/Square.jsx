import React from 'react';

const Square = props => {
  const { value, onClick, isWinningSquare } = props;
  //   console.log(props);

  return (
    <>
      <button
        type="button"
        className="square"
        onClick={onClick}
        style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}
      >
        {value}
      </button>
    </>
  );
};

export default Square;

// import React from 'react';

// const Square = props => {
//   const { value } = props;
//   //   const { value, children } = props;
//   //   console.log(value);
//   //   console.log(props);

//   function clicked(event) {
//     console.log(event.target);
//   }

//   return (
//     <>
//       <button type="button" className="square" onClick={clicked}>
//         {value}
//       </button>
//     </>
//   );
// };

// export default Square;
