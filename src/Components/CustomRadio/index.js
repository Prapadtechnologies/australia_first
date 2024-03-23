import React from "react";
import { Field } from "formik";

const CustomRadio = (props) => {
  const { data, name, label, disabled } = props;
  return (
    <div className="flex flex-col">
      {
        label &&  <label className="block text-md my-2 font-pop text-primary">
        {label}
      </label>
      }
     
      <div role="group" aria-labelledby="my-radio-group">
        {data.map((item) => {
          return (
            <label key={item.id} className="px-3 py-3">
              <Field type="radio" name={name} value={item.value} disabled={disabled} />
              <span className="px-2 font-pop text-placeholderColor text-xs">{item.title}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};
export default CustomRadio;