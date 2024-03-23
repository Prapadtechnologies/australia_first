import React, { useEffect, useState } from "react";
import withHoc from "../../../Components/Hoc";
import CustomModal from "../../../Components/Modal";
import ProductsForm from "./ProductsForm";
import { apiCall, getApiCall } from "../../../Utilites/Api";
import { ApiUrl } from "../../../Constants";
import { toast } from "react-toastify";
import { convertToDbFormat } from "../../../Utilites/Date";


const Products = () => {
  const [modalProps, setModalProps] = useState({
    visible: false,
    title: "",
    key: "",
  });
  
  const openAddProductModal = () => {
    setModalProps({
      visible: true,
      title: "Add Product",
      key: "addProduct",
    });
  };

  const closeModal = () => {
    setModalProps({
      visible: false,
      title: "",
      key: "",
    });
  };

  const addNewProduct = async ({ ...payload }) => {
   
  };

  return (
    <>
      <CustomModal handleModalClose={closeModal} modalProps={modalProps}>
        <ProductsForm
          handleModalClose={closeModal}
          handleAddProduct={addNewProduct}
        />
      </CustomModal>
      <div className="bg-grey px-7 py-3">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-center items-center">
            <p className="font-pop font-medium text-primary text-md">Products</p>
            <img
              src="/chevron_down.png"
              className="w-4 h-4 object-contain mt-2 mx-2"
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-12">
               <p className="font-pop text-primary text-sm">Import Products</p>
               <p className="font-pop text-primary text-sm">Save Merch to Trailer/Warehouse</p>
 <div
            className="flex flex-row justify-center items-center bg-primary w-40 h-9 rounded-lg gap-2 cursor-pointer"
            onClick={openAddProductModal}
          >
            <img src={"/plus.png"} className="w-3 h-3 object-contain" />
            <p className="font-pop text-xs text-white">Add Merch</p>
          </div>
            </div>
         
        </div>
      </div>
      <div className="bg-white px-7 py-4">
      
       
      </div>
    </>
  );
};

export default withHoc(Products, { ProductDate: false, isProducts: true });
