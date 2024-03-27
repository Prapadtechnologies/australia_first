import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

import { AppImages } from "../../../../Constants/Images";
import { ToursSchema } from "../../../../Utilites/Validation";
import TextInput from "../../../../Components/TextInput";
import CustomSelectPicker from "../../../../Components/CustomSelect";
import CustomDatepicker from "../../../../Components/CustomDatePicker";


const ToursForm = (props) => {
  const { handleModalClose, venueList, handleAddTour, addToursData, handleSetAddExpandModal } = props;

  const getFormttedTourTypeData = (tourTypes) => {
    const formattedTourTypes =
      tourTypes &&
      tourTypes.length > 0 &&
      tourTypes.map((item) => {
        return {
          label: item,
          value: item,
        };
      });
    return formattedTourTypes;
  };

  const getFormttedCurrencyData = (currencyTypes) => {
    const formattedCurrency =
      currencyTypes &&
      currencyTypes.length > 0 &&
      currencyTypes.map((item) => {
        return {
          ...item,
          label: item.name + " " + item.symbol,
          value: item.code,
        };
      });
    return formattedCurrency;
  };

  return (
    <Formik
      initialValues={{
        start_date: "",
        end_date: "",
        tour_name: "",
        tour_type: "",
        report_currency: "",
      }}
      validationSchema={ToursSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        handleAddTour(values);
        console.log("post data", values);
      }}
    >
      {({
        handleSubmit,
        isSubmitting,
        errors,
        touched,
        values,
        /* and other goodies */
      }) => (
        <Form onSubmit={handleSubmit} className="m-3">
          <>
            <div className=" flex flex-row justify-between items-center">
              <div className="flex flex-col">
                <p className="font-pop text-xl font-medium text-primary">
                  Add New Tour
                </p>
              </div>
              <div className="flex flex-row  gap-4">
                <button
                  type="button"
                  className="flex justify-center items-center  bg-grey h-8 w-8 rounded-lg shadow-lg"
                  onClick={handleModalClose}
                >
                  <img src={AppImages.cancelBlack} className="w-3 h-3" />
                </button>
                <button
                  type="submit"
                  className="flex justify-center items-center  bg-secondary h-8 w-8 rounded-lg shadow-lg"
                >
                  <img src={AppImages.checkIcon} className="w-3 h-3" />
                </button>
              </div>
            </div>
            <p className="font-pop text-xs  text-placeholderColor">Tours</p>
          </>
          <div className="border my-6" />
          <>
            <div className="flex flex-row justify-between items-center">
              <TextInput
                type="text"
                name="tour_name"
                placeholder="Tour Name"
                rightIcon={null}
                className="p-2.5 w-96 border-placeholderColor"
              />
              <div className="h-16">
                <CustomSelectPicker
                  isMulti={false}
                  label={""}
                  placeHolder={"Tour Type"}
                  data={getFormttedTourTypeData(addToursData.tour_types)}
                  name={"tour_type"}
                  className="px-2.5 w-72 border-placeholderColor"
                />
                <span className="text-danger text-sm font-pop text-xs">
                  {errors.tour_type && touched.tour_type && errors.tour_type}
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center ">
              <div className="h-16">
                <CustomDatepicker
                  name="start_date"
                  className="p-2.5 w-60"
                  placeholder="Start date"
                  id="start_date"
                  hanldeSetModalHeight={handleSetAddExpandModal}
                />
                {touched.start_date && errors.start_date ? (
                  <span className="text-danger font-pop text-xs">
                    {errors.start_date}
                  </span>
                ) : null}
              </div>
              <div className="h-16">
                <CustomDatepicker
                  name="end_date"
                  className="p-2.5 w-60 border-placeholderColor"
                  placeholder="End date"
                  id="end_date"
                  startDate={values.start_date}
                  hanldeSetModalHeight={handleSetAddExpandModal}
                />
                {touched.end_date && errors.end_date ? (
                  <span className="text-danger font-pop text-xs">
                    {errors.end_date}
                  </span>
                ) : null}
              </div>
              <div className="h-16">
                <CustomSelectPicker
                  isMulti={false}
                  label={""}
                  placeHolder={"Report Currency"}
                  data={getFormttedCurrencyData(addToursData.currency)}
                  name={"report_currency"}
                  className="px-2.5 w-52 border-placeholderColor"
                />
                <span className="text-danger text-sm font-pop text-xs">
                  {errors.report_currency &&
                    touched.report_currency &&
                    errors.report_currency}
                </span>
              </div>
            </div>

            <div className="flex flex-row  gap-8 items-center">
              <div className="h-10">
                <p className="text-secondary font-medium text-xs">Vend Fee</p>
                <Field type="checkbox" name="vend_fee" />
              </div>
              <div className="h-10">
                <p className="text-secondary font-medium text-xs">
                  Send Settlement Emails In Show Currency?
                </p>
                <Field type="checkbox" name="settlement_email" />
              </div>
            </div>
          </>
        </Form>
      )}
    </Formik>
  );
};

export default ToursForm;
