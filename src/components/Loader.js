import React from 'react';

const Loader = ({ timeout }) => {
  return (
    <>
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </>
  );
};

export default Loader;
