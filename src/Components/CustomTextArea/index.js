import React from "react";
import { useField } from "formik";

const CustomTextArea = (props) => {
  const { placeholder, className } = props;
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col">
      <textarea
        {...field}
        {...props}
        className={`border rounded-lg placeholder-placeholderColor font-pop text-xs ${className ? className : 'w-72 p-4  border-secondary '}`}
        placeholder={placeholder}
      ></textarea>
      
    </div>
  );
};

export default CustomTextArea;
