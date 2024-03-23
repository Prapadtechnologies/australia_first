import React from "react";
import Header from '../../Components/Header';
import SecondaryHeader from '../../Components/SecondaryHeader';

const Hoc = (WrapperComponent,props) => {
  const { isProducts, showDate } = props;
  return function () {
    return (
      <div>
        <Header  isProductPage={isProducts}/>
        <SecondaryHeader showDate={showDate} isProductPage={isProducts} />
        <WrapperComponent />
      </div>
    );
  };
};

export default Hoc;
