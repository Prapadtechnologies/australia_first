import React from "react";
import Header from '../../Components/Header';
import SecondaryHeader from '../../Components/SecondaryHeader';

const Hoc = (WrapperComponent,props) => {
  const { secondaryMenu,page } = props;
  return function () {
    return (
      <div>
        <Header currentPage={page} />
        <SecondaryHeader currentPage={page} secondaryMenu={secondaryMenu} />
        <WrapperComponent />
      </div>
    );
  };
};

export default Hoc;
