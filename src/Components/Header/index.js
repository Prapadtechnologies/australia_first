import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { AuthContext } from "../../Context/AuthContext";
import { AppImages } from "../../Constants/Images";
import CustomModal from "../../Components/Modal";
import { showsMenu } from "../../Constants/AppData";

const Header = (props) => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const navigation = useNavigate();
  const { currentPage } = props;
  const authContext = useContext(AuthContext);
  const handleNavigation = (menuItem) => {
    setShowMegaMenu(false)
    navigation(`/${menuItem.path}`);
  };
  const renderMenuItems = () => {
    return (
      <div className="flex flex-row justify-between items-center  gap-14">
        {showsMenu.map((item) => (
          <div className="flex flex-col" key={item.id}>
            <div className="h-7">
              <p className="text-sm text-primary font-medium font-pop">
                {item.title}
              </p>
            </div>

            <div className="flex flex-col h-40">
              {item.subMenu.map((subItem) => (
                <p
                  className="text-xs text-primary font-pop my-2 cursor-pointer"
                  onClick={() => handleNavigation(subItem)}
                >
                  {subItem.title}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="bg-primary px-6 py-4">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-6">
          <div
            className="flex flex-row justify-center items-center gap-2 bg-white h-10 w-28 rounded-lg cursor-pointer"
            onClick={() => setShowMegaMenu(!showMegaMenu)}
          >
            <img
              src={
                currentPage === "tours" || currentPage === "shows"
                  ? AppImages.tours
                  : AppImages.shirt
              }
              className="w-5 h-5 object-contain"
            />
            <p
              className="font-pop text-primary text-md font-medium text-md"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              {currentPage === "tours" || currentPage === "shows"
                ? "Tours"
                : "Merch"}
            </p>
          </div>
          {showMegaMenu && (
            <div className="absolute top-16 lg:top-20 bg-white w-40 h-60 z-20 shadow-placeholderColor shadow-2xl rounded-xl w-6/12 lg:w-8/12 p-6">
              {renderMenuItems()}
            </div>
          )}

          <div className="flex justify-center items-center bg-secondary h-10 w-10 rounded-lg">
            <img src="/shirt.png" className="w-5 h-5 object-contain" />
          </div>
          <div className="flex justify-center items-center bg-secondary h-10 w-10 rounded-lg">
            <img src="/hand.png" className="w-5 h-5 object-contain" />
          </div>
          <div className="border border-left border-white" />
          <div className="flex justify-center items-center bg-secondary h-10 w-10 rounded-lg">
            <img src={AppImages.user} className="w-5 h-5 object-contain" />
          </div>
          <div className="flex justify-center items-center bg-secondary h-10 w-10 rounded-lg">
            <img src={AppImages.settings} className="w-5 h-5 object-contain" />
          </div>
          <div className="border border-left border-white" />
          <div className="flex justify-center items-center bg-secondary h-10 w-10 rounded-lg">
            <img
              src={AppImages.circle_plus_white}
              className="w-5 h-5 object-contain"
            />
          </div>
          <div className="flex justify-center items-center bg-secondary h-10 w-10 rounded-lg">
            <img src={AppImages.bank} className="w-5 h-5 object-contain" />
          </div>
          <div className="flex justify-center items-center bg-secondary h-10 w-10 rounded-lg">
            <img
              src={AppImages.up_down_white}
              className="w-5 h-5 object-contain text-white"
            />
          </div>
          <div className="flex justify-center items-center bg-secondary h-10 w-10 rounded-lg">
            <img src={AppImages.clock} className="w-5 h-5 object-contain" />
          </div>
        </div>

        <div className="flex flex-row gap-12 justify-center items-center">
          <div className="flex flex-row justify-center items-center bg-primary border border-white rounded-lg p-2 gap-2">
            <img
              src={AppImages.activate_user}
              className="w-5 h-5 object-contain"
            />
            <p className="font-pop text-white text-sm">Activate Register</p>
          </div>

          <div
            className="flex flex-row gap-3 justify-center items-center"
            onClick={authContext.doLogout}
          >
            <img src="/profile.png" className="w-10 h-10 object-contain" />
            <p className="font-pop text-white text-sm">Hi, Wassim Slaiby</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
