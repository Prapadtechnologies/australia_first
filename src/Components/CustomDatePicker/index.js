import React from "react";
import { useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const CustomDatepicker = ({
  name = "",
  placeholder,
  className,
  id,
  startDate,
  hanldeSetModalHeight,
}) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  const minimumDate = () => {
    if (startDate) {
      const formattedDate = moment(startDate);
      return formattedDate.add(1, "d")._d;
    }
    return new Date();
  };

  return (
    <div className="flex flex-col	">
      <DatePicker
        {...field}
        selected={value ? value : null}
        onChange={(date) => {
          
          setValue(date);
          hanldeSetModalHeight && hanldeSetModalHeight(false);
        }}
        className={`border border-secondary p-2 rounded-lg placeholder-placeholderColor font-pop text-xs w-44 ${className}`}
        placeholderText={placeholder}
        autoComplete={"off"}
        minDate={minimumDate()}
        onFocus={() => hanldeSetModalHeight && hanldeSetModalHeight(true)}
        onBlur={() => hanldeSetModalHeight && hanldeSetModalHeight(false)}
      />
    </div>
  );
};

export default CustomDatepicker;
