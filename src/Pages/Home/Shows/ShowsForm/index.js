import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

import { AppImages } from "../../../../Constants/Images";
import { ShowsSchema } from "../../../../Utilites/Validation";
import TextInput from "../../../../Components/TextInput";
import CustomSelectPicker from "../../../../Components/CustomSelect";
import CustomDatepicker from "../../../../Components/CustomDatePicker";
import CustomRadio from "../../../../Components/CustomRadio";
import CustomTextArea from "../../../../Components/CustomTextArea";

const showTypes = [{ id: 1, value: "Festival", label: "Festival" }];

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
  const [formStep, setFormStep] = useState(1);
  const handleShowEndDate = () => {
    setShowEndDate(!showEndDate);
  };

  const getFormttedVenueData = (venueList) => {
    const formattedVenueList =
      venueList &&
      venueList.length > 0 &&
      venueList.map((item) => {
        return {
          ...item,
          label: `${item.name} ,${item.addressLineOne}`,
          value: `${item.name} ,${item.addressLineOne}`,
        };
      });
    return formattedVenueList;
  };

  const renderStep1Form = (errors, touched, values) => {
    return (
      <div className="flex flex-col mt-5">
        <div className="h-16">
          <CustomSelectPicker
            isMulti={false}
            label={""}
            placeHolder={"Search Venue / City"}
            data={getFormttedVenueData(venueList)}
            name={"venue_address"}
            className="w-96 px-2.5 border-placeholderColor"
          />
          <span className="text-danger text-sm font-pop text-xs">
            {errors.venue_address &&
              touched.venue_address &&
              errors.venue_address}
          </span>
        </div>
        <div className="flex flex-row gap-2">
          <div className="h-16">
            <CustomDatepicker
              name="start_date"
              className="p-2.5 w-60 border-placeholderColor"
              placeholder="Start date"
            />
            {touched.start_date && errors.start_date ? (
              <span className="text-danger font-pop text-xs my-1">
                {errors.start_date}
              </span>
            ) : null}
          </div>
          {showEndDate && (
            <div className="h-16">
              <CustomDatepicker
                name="end_date"
                className="p-2.5 w-60 border-placeholderColor"
                placeholder="End date"
                startDate={values.start_date}
              />

              {touched.end_date && errors.end_date ? (
                <span className="text-danger font-pop text-xs my-1">
                  {errors.end_date}
                </span>
              ) : null}
            </div>
          )}
          <div
            className="flex justify-center items-center border border-placeholderColor h-9 w-9 rounded-lg cursor-pointer"
            onClick={handleShowEndDate}
          >
            {showEndDate ? (
              <img src={AppImages.cancelBlack} className="w-3 h-3" />
            ) : (
              <img src={AppImages.plus} className="w-3 h-3" />
            )}
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <TextInput
            type="text"
            name="no_of_shows"
            placeholder="No. of Shows"
            rightIcon={null}
            value={1}
            className="p-2.5 w-44 border-placeholderColor"
          />
          <div className="h-16">
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
        <div className="flex flex-row gap-2 justify-between">
          <div>
            <p className="text-md font-pop text-primary">Tax Method</p>
            <CustomRadio data={taxMethods} name={"tax_method"} label={""} />
            <span className="text-danger text-sm font-pop text-xs">
              {errors.tax_method && touched.tax_method && errors.tax_method}
            </span>
          </div>

          <TextInput
            type="number"
            name="fee_apparel"
            placeholder="Apparel Fee%"
            rightIcon={null}
            className="p-2.5 w-36 border-placeholderColor"
          />
          <TextInput
            type="number"
            name="fee_music"
            placeholder="M Merch Fee %"
            rightIcon={null}
            className="p-2.5 w-36 border-placeholderColor"
          />
          <TextInput
            type="number"
            name="fee_others"
            placeholder="Other Fee %"
            className="p-2.5 w-36 border-placeholderColor"
          />
        </div>

        <div className="h-24">
          <CustomTextArea
            name="note"
            placeholder="note"
            rows={4}
            className="	p-2.5 border-placeholderColor"
          />
          <span className="text-danger text-sm font-pop text-xs">
            {errors.note && touched.note && errors.note}
          </span>
        </div>
      </div>
    );
  };

  const renderStep2Form = (errors, touched, values) => {
    return (
      <div className="flex flex-col mt-4">
        <div className="flex flex-row gap-2">
          <TextInput
            type="text"
            name="venue_name_readable"
            placeholder="Venue name"
            rightIcon={null}
            className="p-2.5 w-72 border-placeholderColor"
            disabled={true}
            value={values.venue_address && values.venue_address.split(",")[0]}
          />
          <div
            className="flex justify-center items-center bg-primary w-9 h-9 border border-secondary rounded-md cursor-pointer"
            onClick={() => setFormStep(1)}
          >
            <img src={AppImages.edit} className="w-5 h-5 object-contain mt-1" />
          </div>
        </div>
        <div className="h-24">
          <CustomTextArea
            name="venue_address_readable"
            placeholder="Venue address"
            rows={3}
            className="	p-2.5 border-placeholderColor"
            disabled={"disabled"}
            value={values.venue_address && values.venue_address.split(",")[1]}
          />
        </div>
        <div className="flex flex-row gap-2 items-center">
          <TextInput
            type="text"
            name="venue_rep_name"
            placeholder="Venue Representative name"
            rightIcon={null}
            className="p-2.5 w-80 border-placeholderColor"
          />
        </div>
        <div className="flex flex-row gap-2 items-center">
          <TextInput
            type="email"
            name="venue_rep_email"
            placeholder="Venue Rep Email"
            rightIcon={null}
            className="p-2.5 w-48 border-placeholderColor"
          />
          <TextInput
            type="text"
            name="venue_rep_phone"
            placeholder="Venue Rep Phone"
            rightIcon={null}
            className="p-2.5 w-48 border-placeholderColor"
          />
          <TextInput
            type="text"
            name="concession_company"
            placeholder="Concession Company"
            rightIcon={null}
            className="p-2.5 w-48 border-placeholderColor"
          />
        </div>

        <div className="flex flex-row gap-2 items-center">
          <TextInput
            type="number"
            name="tax_apparel"
            placeholder="Apparel Tax Info %"
            rightIcon={null}
            className="p-2.5 w-48 border-placeholderColor"
          />
          <TextInput
            type="number"
            name="tax_merch"
            placeholder="Music Tax Info %"
            rightIcon={null}
            className="p-2.5 w-48 border-placeholderColor"
          />
          <TextInput
            type="number"
            name="tax_others"
            placeholder="Other Tax info %"
            rightIcon={null}
            className="p-2.5 w-48 border-placeholderColor"
          />
        </div>
        <div className="flex flex-row gap-2 items-center">
          <TextInput
            type="text"
            name="merchandise_company"
            placeholder="Merchandise Company Name"
            rightIcon={null}
            className="p-2.5 w-80 border-placeholderColor"
          />
        </div>
        <div className="flex flex-row gap-2 items-center">
          <TextInput
            type="text"
            name="merchandise_contact_name"
            placeholder="Merchandise Contact Name"
            rightIcon={null}
            className="p-2.5 w-60 border-placeholderColor"
          />
          <TextInput
            type="text"
            name="merchandise_contact_number"
            placeholder="Merchandise Contact Number"
            rightIcon={null}
            className="p-2.5 w-60 border-placeholderColor"
          />
        </div>
      </div>
    );
  };

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
        fee_apparel: "",
        fee_others: "",
        fee_music: "",
        concession_company: "",
        merchandise_company: "",
        merchandise_contact_name: "",
        merchandise_contact_number: "",
      }}
      validationSchema={ShowsSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        handleAddShow(values);
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
                  type="button"
                  className="flex justify-center items-center  bg-grey h-8 w-8 rounded-lg shadow-lg"
                  onClick={handleModalClose}
                >
                  <img src={AppImages.cancelBlack} className="w-3 h-3" />
                </button>
                {formStep === 2 && (
                  <button
                    type="submit"
                    className="flex justify-center items-center  bg-secondary h-8 w-8 rounded-lg shadow-lg"
                  >
                    <img src={AppImages.checkIcon} className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
            <p className="font-pop text-xs  text-placeholderColor">
              Add Show
            </p>
          </div>
          <div className="border mx-4" />
          <div className="mx-4">
            {formStep === 1 && renderStep1Form(errors, touched, values)}
            {formStep === 2 && renderStep2Form(errors, touched, values)}
            <div className="flex flex-row gap-4 mt-6 justify-center items-center">
              <div
                className={`${
                  formStep === 1 ? "bg-primary" : "bg-white"
                } h-7 w-7 flex justify-center items-center border rounded-md cursor-pointer`}
                onClick={() => setFormStep(1)}
              >
                <p
                  className={`font-pop text-xs ${
                    formStep === 1 ? "text-white" : "text-primary"
                  }`}
                >
                  {" "}
                  1
                </p>
              </div>
              <p className="text-primary font-pop">>></p>
              <div
                className={`${
                  formStep === 2 ? "bg-primary" : "bg-white"
                } h-7 w-7 flex justify-center items-center border rounded-md cursor-pointer`}
                onClick={() => setFormStep(2)}
              >
                <p
                  className={`font-pop text-xs ${
                    formStep === 2 ? "text-white" : "text-primary"
                  }`}
                >
                  {" "}
                  2
                </p>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ShowsForm;
