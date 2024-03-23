import React, { useContext } from "react";
import { useNavigate  } from "react-router-dom";
import SearchBar from "./SearchBar";
import { AuthContext } from "../../Context/AuthContext";
import { AppImages } from "../../Constants/Images";
const Header = (props) => {
  const navigation = useNavigate();
  const { isProductPage } = props;
  const authContext = useContext(AuthContext);
  const goToProducts = () => {
    navigation('/products')
  }
  return (
    <div className="bg-primary px-6 py-4">
      {isProductPage ? (
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-6">
            <div className="flex justify-center items-center bg-secondary h-10 w-10 rounded-lg">
              <img src={AppImages.logo} className="w-5 h-5 object-contain" />
            </div>
            <div className="flex flex-row justify-center items-center gap-2 bg-white h-10 w-28 rounded-lg">
              <img src={AppImages.shirt} className="w-5 h-5 object-contain" />
              <p
                className="font-pop text-primary text-md font-medium text-md"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Merch
              </p>
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
              <img src={AppImages.circle_plus_white} className="w-5 h-5 object-contain" />
            </div>
            <div className="flex justify-center items-center bg-secondary h-10 w-10 rounded-lg">
              <img src={AppImages.bank} className="w-5 h-5 object-contain" />
            </div>
            <div className="flex justify-center items-center bg-secondary h-10 w-10 rounded-lg">
              <img src={AppImages.up_down_white} className="w-5 h-5 object-contain text-white" />
            </div>
            <div className="flex justify-center items-center bg-secondary h-10 w-10 rounded-lg">
              <img src={AppImages.clock} className="w-5 h-5 object-contain" />
            </div>
          </div>


          <div className="flex flex-row gap-12 justify-center items-center">
            <div className="flex flex-row justify-center items-center bg-primary border border-white rounded-lg p-2 gap-2">
              <img src={AppImages.activate_user} className="w-5 h-5 object-contain" />
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
      ) : (
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-6">
            <div className="flex flex-row justify-center items-center gap-2 bg-white h-10 w-28 rounded-lg">
              <img src="/logo.png" className="w-5 h-5 object-contain" />
              <p
                className="font-pop text-primary text-md font-medium"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Tours
              </p>
            </div>
            <div className="flex justify-center items-center bg-secondary h-10 w-10 rounded-lg cursor-pointer" onClick={goToProducts}>
              <img src="/shirt.png" className="w-5 h-5 object-contain" />
            </div>
            <div className="flex justify-center items-center bg-secondary h-10 w-10 rounded-lg">
              <img src="/hand.png" className="w-5 h-5 object-contain" />
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <SearchBar />
            <div className="flex justify-center items-center bg-white h-10 w-10 rounded-full">
              <img src="/settings.png" className="w-4 h-4 object-contain" />
            </div>
            <div className="flex justify-center items-center bg-white h-10 w-10 rounded-full">
              <img src="/love.png" className="w-3 h-3 object-contain" />
              <span className="absolute ml-10 w-5 h-5 text-center rounded-full p-1 bg-secondary text-white text-[9px] font-pop">
                4
              </span>
            </div>
            <div
              className="flex justify-center items-center bg-white h-10 w-10 rounded-full"
              onClick={authContext.doLogout}
            >
              <img src="/profile.png" className="w-10 h-10 object-contain" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
