import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

import { AppImages } from "../../../../Constants/Images";
import { ShowsSchema } from "../../../../Utilites/Validation";
import TextInput from "../../../../Components/TextInput";
import CustomSelectPicker from "../../../../Components/CustomSelect";
import CustomDatepicker from "../../../../Components/CustomDatePicker";
import CustomRadio from "../../../../Components/CustomRadio";
import CustomTextArea from "../../../../Components/CustomTextArea";

const showTypes = [
  { id:1,  value: 'Festival', label: "Festival" },
];

const taxMethods = [
  {
    id: 1,
    title: "Inclusive",
    value: "inclusive",
  },
  {
    id: 2,
    title: "Exclusive",
    value: "exclusive",
  },
];
const ShowsForm = (props) => {
  const { handleModalClose, venueList, handleAddShow } = props;
  const [showEndDate, setShowEndDate] = useState(false);
  const handleShowEndDate = () => {
    setShowEndDate(!showEndDate);
  };

  const getFormttedVenueData = (venueList) => {
    const formattedVenueList = venueList && venueList.length > 0 && venueList.map(item => {
      return {...item, label: `${item.name} ,${item.addressLineOne}`, value: `${item.name} ,${item.addressLineOne}`}
    })
    return formattedVenueList
  }


  return (
    <Formik
      initialValues={{
        start_date: "",
        end_date: "",
        no_of_shows: "",
        venue_address: "",
        show_type: "",
        show_capacity: "",
        tax_method: "",
        tax_apparel: "",
        tax_others: "",
        tax_merch: "",
        venue_rep_name: "",
        venue_rep_email: "",
        venue_rep_phone: "",
        note: "",
      }}
     validationSchema={ShowsSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        handleAddShow(values)
        console.log("post data", values);
      }}
    >
      {({
        handleSubmit,
        isSubmitting,
        errors,
        touched,
        /* and other goodies */
      }) => (
        <Form onSubmit={handleSubmit}>
          <div className="p-4">
            <div className=" flex flex-row justify-between items-center gap-20">
              <div className="flex flex-col">
                <p className="font-pop text-xl font-medium text-primary">
                  Show Date
                </p>
              </div>

              <div className="flex flex-row gap-4">
                <div className="flex justify-center items-center border border-secondary h-8 w-8 rounded-lg">
                  <img src={AppImages.circlePlus} className="w-4 h-4" />
                </div>
                <div className="flex justify-center items-center border border-secondary h-8 w-8 rounded-lg">
                  <img src={AppImages.upDown} className="w-4 h-4" />
                </div>
                <div className="flex justify-center items-center border border-secondary h-8 w-8 rounded-lg">
                  <img src={AppImages.calendarStar} className="w-4 h-4" />
                </div>
                <div className="flex justify-center items-center border border-secondary h-8 w-8 rounded-lg">
                  <img src={AppImages.calendarCheck} className="w-4 h-4" />
                </div>
                <div className="flex justify-center items-center border border-secondary h-8 w-8 rounded-lg">
                  <img src={AppImages.calendari} className="w-4 h-4" />
                </div>
              </div>

              <div className="flex flex-row gap-4">
                <button
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
            <p className="font-pop text-xs  text-placeholderColor my-2">
              Add Show
            </p>
          </div>
          <div className="border mx-4" />
          <div className="mx-4 my-10">
            <div className="w-3/5	my-4">
              <CustomSelectPicker
                isMulti={false}
                label={""}
                placeHolder={"Search Venue / City"}
                data={getFormttedVenueData(venueList)}
                name={"venue_address"}
                className="w-90 px-2.5 border-placeholderColor"
              />
              <span className="text-danger text-sm font-pop text-xs">
                {errors.venue_address &&
                  touched.venue_address &&
                  errors.venue_address}
              </span>
            </div>
            <div className="flex flex-row my-10 gap-2 items-center">
              <div className="">
                <CustomDatepicker
                  name="start_date"
                  className="p-2.5 w-44 border-placeholderColor"
                  placeholder="Start date"
                />
                {touched.start_date && errors.start_date ? (
                  <span className="text-danger font-pop text-xs my-2">
                    {errors.start_date}
                  </span>
                ) : null}
              </div>
              {showEndDate && (
                <div className="">
                  <CustomDatepicker
                    name="end_date"
                    className="p-2.5 w-44 border-placeholderColor"
                    placeholder="End date"
                  />

                  {touched.end_date && errors.end_date ? (
                    <span className="text-danger font-pop text-xs my-2">
                      {errors.end_date}
                    </span>
                  ) : null}
                </div>
              )}
              <div
                className="flex justify-center items-center border border-placeholderColor h-8 w-8 rounded-lg cursor-pointer"
                onClick={handleShowEndDate}
              >
                {showEndDate ? (
                  <img src={AppImages.cancelBlack} className="w-3 h-3" />
                ) : (
                  <img src={AppImages.plus} className="w-3 h-3" />
                )}
              </div>
            </div>
            <div className="flex flex-row my-10 gap-3 items-center">
              <TextInput
                type="text"
                name="no_of_shows"
                placeholder="No. of Shows"
                rightIcon={null}
                className="p-2.5 w-44 border-placeholderColor"
              />
              <div>
                <CustomSelectPicker
                  isMulti={false}
                  placeHolder={"Show Type"}
                  data={showTypes}
                  name={"show_type"}
                  className="w-60 px-2.5 border-placeholderColor"
                />
                <span className="text-danger text-sm font-pop text-xs">
                  {errors.show_type && touched.show_type && errors.show_type}
                </span>
              </div>

              <TextInput
                type="text"
                name="show_capacity"
                placeholder="Show Capacity"
                rightIcon={null}
                className="p-2.5 w-44 border-placeholderColor"
              />
            </div>
            <div className="flex flex-row my-10 gap-3 justify-between items-center">
              <div>
                <p className="text-md my-2 font-pop text-primary">Tax Method</p>
                <CustomRadio data={taxMethods} name={"tax_method"} label={""} />
                <span className="text-danger text-sm font-pop text-xs">
                  {errors.tax_method && touched.tax_method && errors.tax_method}
                </span>
              </div>

              <TextInput
                type="number"
                name="tax_apparel"
                placeholder="Apparel Fee%"
                rightIcon={null}
                className="p-2.5 w-36 border-placeholderColor"
              />
              <TextInput
                type="number"
                name="tax_merch"
                placeholder="M Merch Fee %"
                rightIcon={null}
                className="p-2.5 w-36 border-placeholderColor"
              />
              <TextInput
                type="number"
                name="tax_others"
                placeholder="Other Fee %"
                className="p-2.5 w-36 border-placeholderColor"
              />
            </div>
            <div className="flex flex-row my-10 gap-3 items-center">
              <TextInput
                type="text"
                name="venue_rep_name"
                placeholder="Representative Name"
                rightIcon={null}
                className="p-2.5 w-48 border-placeholderColor"
              />
              <TextInput
                type="email"
                name="venue_rep_email"
                placeholder="Representative Email"
                rightIcon={null}
                className="p-2.5 w-48 border-placeholderColor"
              />
              <TextInput
                type="text"
                name="venue_rep_phone"
                placeholder="Representative Phone"
                rightIcon={null}
                className="p-2.5 w-48 border-placeholderColor"
              />
            </div>
            <div className="">
              <CustomTextArea
                name="note"
                placeholder="note"
                rows={5}
                className="	p-2.5 border-placeholderColor"
              />
              <span className="text-danger text-sm font-pop text-xs">
                {errors.note && touched.note && errors.note}
              </span>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ShowsForm;
