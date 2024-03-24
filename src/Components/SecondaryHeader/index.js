import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getApiCall } from "../../Utilites/Api";
import { ApiUrl } from "../../Constants/Api";

const SecondaryHeader = (props) => {
  const { secondaryMenu, currentPage } = props;
  const [showToursDropdown, setShowToursDropdown] = useState(false);
  const [toursList, setToursList] = useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();


  useEffect(() => {
    getTours()
  },[currentPage])


  const getTours = async() => {
    if(currentPage === 'shows'){
      const resp = await getApiCall(ApiUrl.toursList('upcoming'));
      if (resp.status) {
        setToursList(resp.data.list);
      }
    }
  }

  const navigateToPath = (item) => {
    if (item.path === "/shows") {
      const tourId = localStorage.getItem("initalTourId");
      navigate(item.path + "/" + tourId);
    } else {
      navigate(item.path);
    }
  };

  const renderMenuOptions = () => {
    return (
      <div className="flex flex-row gap-6">
        {secondaryMenu.map((item) => (
          <div
            className={`flex justify-center items-center ${
              item.path === pathname
                ? "bg-secondary "
                : " border border-secondary "
            } py-2 px-3 rounded-lg cursor-pointer`}
            key={item.id}
            onClick={() => navigateToPath(item)}
          >
            <p
              className={`font-pop text-xs  ${
                item.path === pathname ? "text-white" : "text-secondary"
              }`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    );
  };

  const navigateToShows = (tourId) => {
    setShowToursDropdown(false);
    navigate(`/shows/${tourId}`);
  }

  return (
    <div className="bg-white px-6 py-3 border border-secondary">
      <div className="flex flex-row justify-between items-center">
        {renderMenuOptions()}

        {currentPage === "shows" && (
          <div className="flex flex-row justify-center items-center gap-10 cursor-pointer">
            <div
              className="flex flex-row justify-between items-center z-50"
              onClick={() => setShowToursDropdown(!showToursDropdown)}
            >
              <div className="flex flex-row justify-center items-center">
                <p className="font-pop font-medium text-primary text-md">
                  Manage Tours
                </p>
                <img
                  src="/chevron_down.png"
                  className="w-4 h-4 object-contain mt-2 mx-2"
                />
              </div>
            </div>
            {showToursDropdown && (
              <ul className="bg-white border border-primary absolute top-32 right-5 w-60 rounded-md z-20 shadow-lg max-h-44	overflow-y-scroll">
                {
                  toursList.map(item => (
                    <li key={item.id} className="shadow-md" onClick={() => navigateToShows(item.id)}>
                      <p className="font-pop text-xs text-primary text-center border-b p-2">
                        {item.tour_name}
                      </p>
                    </li>
                  ))
                }
               
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SecondaryHeader;
