import React from "react";
import { useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatepicker = ({ name = "", placeholder, className }) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <div className="flex flex-col">
      <DatePicker
        {...field}
        selected={value}
        onChange={(date) => setValue(date)}
        className={`border border-secondary p-2 rounded-lg placeholder-placeholderColor font-pop text-xs w-44 ${className}`}
        placeholderText={placeholder}
        

      />
      
    </div>
  );
};

export default CustomDatepicker;
