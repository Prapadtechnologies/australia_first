import React, { useEffect, useState } from "react";
import withHoc from "../../../Components/Hoc";
import CustomModal from "../../../Components/Modal";
import ProductsForm from "./ProductsForm";
import { apiCall, getApiCall } from "../../../Utilites/Api";
import { ApiUrl } from "../../../Constants/Api";
import { toast } from "react-toastify";
import { convertToDbFormat } from "../../../Utilites/Date";
import { Table } from "../Dashboard";
import { Sizes } from "../Dashboard";
import { AppImages } from "../../../Constants/Images";

const data2 = [
  {
    id: 1,
    title: "In Bound",
    tData: [544, 544, 544, 544],
  },
  {
    id: 2,
    title: "On Hand",
    tData: [123, 123, 123, 123],
  },
  {
    id: 2,
    title: "Out Bound",
    tData: [123, 123, 123, 123],
  },
];

const data3 = [
  {
    id: 1,
    title: "Total",
    tData: [544, 544, 544, 544],
  },
];

const data4 = [
  {
    id: 1,
    title: "Avg Cost",
    tData: [544, 544, 544, 544],
  }
];

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

  const addNewProduct = async ({ ...payload }) => {};


  const ProductItem = () => {
    return(
      <div className="border border-primary rounded-lg p-5 my-4">
      <div className="flex flex-row align-center justify-evenly my-2">
            <div className="flex flex-row items-center">
              <div className="flex flex-col gap-1">
                <p className="text-primary font-medium font-pop text-sm">
                  Blue T-Shirt
                </p>
                <div className="flex flex-row gap-2">
                  <p className="text-secondary font-pop text-xs ">Apparel</p>
                  <p className="text-placeholderColor font-pop text-xs">
                    Type - T-Shirt
                  </p>
                </div>
                <div className="flex flex-row gap-4 mt-2">
                  <img src="/apparel.png" className="w-24 h-24" />
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-center items-center bg-primary w-7 h-7 border border-secondary rounded-md">
                      <img
                        src={AppImages.edit}
                        className="w-5 h-5 object-contain mt-1"
                      />
                    </div>
                    <div className="flex justify-center items-center bg-primary w-7 h-7 border border-secondary rounded-md">
                      <img
                        src={AppImages.download}
                        className="w-5 h-5 object-contain mt-1"
                      />
                    </div>
                    <div className="flex justify-center items-center bg-primary w-7 h-7 border border-secondary rounded-md">
                      <img
                        src={AppImages.deleteIcon}
                        className="w-5 h-5 object-contain mt-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2">
                  <div className="flex justify-center items-center w-7 h-7 border border-secondary rounded-md">
                    <img src={AppImages.circle_plus_blue} className="w-3 h-3" />
                  </div>
                  <div className="flex justify-center items-center w-7 h-7 border border-secondary rounded-md">
                    <img src={AppImages.locker} className="w-3 h-3" />
                  </div>
                  <div className="flex justify-center items-center w-7 h-7 border border-secondary rounded-md">
                    <img src={AppImages.cart} className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <p className="font-pop text-xs text-placeholderColor">Color</p>
                <p className="font-pop text-sm text-primary">Off-White</p>
              </div>

              <div>
                <p className="font-pop text-xs text-placeholderColor">Gender</p>
                <p className="font-pop text-sm text-primary">Female</p>
              </div>

              <div>
                <p className="font-pop text-xs text-placeholderColor">
                  Reorder
                </p>
                <p className="font-pop text-sm text-primary">Priority</p>
              </div>
              <div>
                <label
                  for="vehicle1"
                  className="font-pop text-xs text-placeholderColor "
                >
                  Multi-Artist
                </label>{" "}
                &nbsp;
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="border border-placeholderColor"
                />
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <Sizes />
              <Table data={data2} />
              <Table data={data3} />
              <Table data={data4} />
            </div>
            <img src={AppImages.graph} />
          </div>
          </div>
    )
  }

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
            <p className="font-pop font-medium text-primary text-md">
              Products
            </p>
            <img
              src="/chevron_down.png"
              className="w-4 h-4 object-contain mt-2 mx-2"
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-12">
            <p className="font-pop text-primary text-sm">Import Products</p>
            <p className="font-pop text-primary text-sm">
              Save Merch to Trailer/Warehouse
            </p>
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
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
      </div>
    </>
  );
};

export default withHoc(Products, { ProductDate: false, isProducts: true });
