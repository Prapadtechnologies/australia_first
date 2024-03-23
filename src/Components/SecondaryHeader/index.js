import React from "react";
import { useNavigate } from "react-router-dom";

const SecondaryHeader = (props) => {
  const { showDate, isProductPage } = props;
  const navigate = useNavigate();

  const goToShows = () => {
    navigate("/shows");
  };

  const renderMenuOptions = (isProductPage) => {
    return isProductPage ? (
      <div className="flex flex-row gap-6">
        <div className="flex flex-row justify-center items-center gap-2">
          <div className="flex justify-center items-center border border-secondary py-2 px-3 rounded-lg">
            <p className="font-pop text-xs text-secondary">Global</p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-2">
          <div className="flex justify-center items-center border border-secondary py-2 px-3   rounded-lg">
            <p className="font-pop text-xs text-secondary">Warehouses</p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-2">
          <div className="flex justify-center items-center border border-secondary py-2 px-3 rounded-lg">
            <p className="font-pop text-xs text-secondary">Trailers</p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-2">
          <div className="flex justify-center items-center border border-secondary py-2 px-3 rounded-lg">
            <p className="font-pop text-xs text-secondary">Shipments</p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-2">
          <div className="flex justify-center items-center border border-secondary py-2 px-3 rounded-lg">
            <p className="font-pop text-xs text-secondary">Orders</p>
          </div>
        </div>
      </div>
    ) : (
      <div className="flex flex-row gap-6">
        <div className="flex justify-center items-center border border-secondary h-9 w-9 rounded-lg">
          <img src="/graph.png" className="w-4 h-4 object-contain" />
        </div>
        <div
          className="flex flex-row justify-center items-center gap-1 bg-secondary h-9 w-24 rounded-lg cursor-pointer"
          onClick={goToShows}
        >
          <img src="/shows.png" className="w-4 h-4 object-contain" />
          <p className="font-pop text-white text-sm">Shows</p>
        </div>
        <div className="flex justify-center items-center border border-secondary h-9 w-9 rounded-lg">
          <img src="/block.png" className="w-4 h-4 object-contain" />
        </div>
        <div className="flex justify-center items-center border border-secondary h-9 w-9 rounded-lg">
          <img src="/money.png" className="w-4 h-4 object-contain" />
        </div>
        <div className="flex justify-center items-center border border-secondary h-9 w-9 rounded-lg">
          <img src="/attach.png" className="w-4 h-4 object-contain" />
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white px-6 py-3 border border-secondary">
      <div className="flex flex-row justify-between items-center">
        {renderMenuOptions(isProductPage)}

        <div className="flex flex-row justify-center items-center gap-10">
          {showDate && (
            <div className="flex flex-row justify-center items-center">
              <p className="font-pop font-medium text-primary">
                24 Oct - 25 Oct | 2023
              </p>
              <img
                src="/chevron_down.png"
                className="w-4 h-4 object-contain mt-2 mx-2"
              />
            </div>
          )}
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row justify-center items-center">
              <p className="font-pop font-medium text-primary text-md">Dawn FM, Sydney</p>
              <img
                src="/chevron_down.png"
                className="w-4 h-4 object-contain mt-2 mx-2"
              />
            </div>

         
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SecondaryHeader;
